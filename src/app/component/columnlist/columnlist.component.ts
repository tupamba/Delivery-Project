import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { ListModel } from './model-data/list.model';
import { ItemListModel } from './model-data/item-list.model';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-columnlist',
  templateUrl: './columnlist.component.html',
  styleUrls: ['./columnlist.component.css']
})
export class ColumnlistComponent implements OnInit {
  @Input() column:number;
  @Input() list$: Observable<ItemListModel[]>;
  @Output() selectData: EventEmitter<ItemListModel> = new EventEmitter<ItemListModel>();
  colClass:string = "col-4";
  constructor() { }

  ngOnInit() {
    if(this.column > 6 || this.column == 0)
      this.column = 6;
    this.colClass = "col-" + 12 / this.column;
  }
}
