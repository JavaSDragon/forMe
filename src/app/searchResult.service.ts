import { HttpClient } from '@angular/common/http';
import { Injectable, Output } from '@angular/core';
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs/Observable';
import { Result } from './result';
import { SearchComponent } from './search/search.component';
import { Subject, SubjectSubscriber } from 'rxjs/Subject';

@Injectable()
export class SearchResultService {
  constructor(private http: HttpClient) { }
  public myValue: any;
  public searchList=[];
  public location:string;
  getInfo(search: string): Observable<Result[]> {
    return this.http.get(`https://api.nestoria.co.uk/api?country=uk&pretty=1&action=search_listings&encoding=json&listing_type=buy&page=1&place_name=${search}`)
      .map(({ response: listings }: any) => listings)
      .map(({ listings }: any) => (
        listings.map(({ img_url: imgUrl, price, title, price_currency: priceCurrency}: any) => ({
          imgUrl,
          price,
          title,
          priceCurrency,
        })
        )))
  }

  getNumRes(search: string): Observable<any> {
    return this.http.get(`https://api.nestoria.co.uk/api?country=uk&pretty=1&action=search_listings&encoding=json&listing_type=buy&page=1&place_name=${search}`)
      .map(({ response: total_results}: any) => total_results)
      .map(({ total_results}: any) => { return total_results})
  }
  getLocation(search: string): Observable<any>{
    return this.http.get(`https://api.nestoria.co.uk/api?country=uk&pretty=1&action=search_listings&encoding=json&listing_type=buy&page=1&place_name=${search}`)
    .map(({ request: location}: any) => location)
    .map(({ location}: any) => { return location})
  }
}