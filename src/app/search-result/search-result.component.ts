import { Input, EventEmitter, Component, OnInit, Output } from '@angular/core';
import { Result } from '../result';
import { SearchResultService } from '../searchResult.service';
import { SearchComponent } from '../search/search.component';



@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {
 searchList = [];
  constructor(private searchResultService: SearchResultService) { }
  private setSearchList(){
    this.searchList=this.searchResultService.searchList;
    }
  ngOnInit() {
    this.setSearchList();
    console.log(this.searchList)
    // this.searchResultService.getInfo()
    //   .subscribe((data) => {
    //     this.searchList = data;
    //     console.log(this.searchList);
    //   });
  }
}
