import { Output, Input, Component, OnInit } from '@angular/core';
import { SearchResultService } from '../searchResult.service';
import { FormControl } from '@angular/forms';
import { EventEmitter } from 'selenium-webdriver';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { forEach } from '@angular/router/src/utils/collection';
import { Result } from '../result';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchRequest = [];
  searchNumbers = [];
  public searchList = [];
  private inputControl: any;
  public location=[];
  constructor(private searchResultService: SearchResultService) { }
  private setValue() {
    this.searchResultService.myValue = this.inputControl.value;
  }
  private setSearchList(){
  this.searchResultService.searchList=this.searchList;
  }
  ngOnInit() {
    this.inputControl = new FormControl();
  }
  go() {
    this.setValue();
    this.searchRequest.push(this.inputControl.value);
    this.searchResultService.getNumRes(this.inputControl.value)
      .subscribe((data) => { 
        this.searchNumbers.push(data)
        console.log( this.searchNumbers);
      });
      this.searchResultService.getLocation(this.inputControl.value)
      .subscribe((data) => {
        this.location.push(data);
        console.log(this.location);
      });
      this.searchResultService.getInfo(this.inputControl.value)
      .subscribe((data) => {
        this.searchList.push(data);
        this.setSearchList();
        console.log(this.searchResultService.searchList);
      });
  }
}
