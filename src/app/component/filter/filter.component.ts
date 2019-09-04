import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators'; 
import { IFilterResult, FilterQueryModel } from './model-data/filter-query.model';
import { FilterQuestionModel } from './model-data/filter-question.model';
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit { 
  @Input() searchData:FilterQuestionModel[];
  @Output() filterData: EventEmitter<FilterQueryModel> = new EventEmitter<FilterQueryModel>();
  searchForm: FormGroup;
  constructor() {
    //this.serachData = [{key:"name",default:"",description:"Nombre",placeHolder:"Nombre"}];
   }

  ngOnInit() {
    let group: any = {};
    this.searchData.forEach(element => {
      group[element.key] = new FormControl(element.default || '');
    });
    this.searchForm = new FormGroup(group);
    this.searchForm .valueChanges.pipe(
      debounceTime(300)
    ).subscribe( 
      result => 
      {
        let response = new FilterQueryModel();
        response.filterResult = Object.keys(result).map((control) =>
        {
          return {key:control,value:result[control]} as IFilterResult;
        });
        this.filterData.emit(response);
      }
      );
  }
  serach()
  {

  }
}

