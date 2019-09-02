import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ItemListModel } from '../model-data/item-list.model';

@Component({
  selector: 'app-itemlist',
  templateUrl: './itemlist.component.html',
  styleUrls: ['./itemlist.component.css']
})
export class ItemlistComponent implements OnInit {
  @Input() item:ItemListModel;
  @Output() selectData: EventEmitter<ItemListModel> = new EventEmitter<ItemListModel>();
  constructor() { }

  ngOnInit() {
  }

}
