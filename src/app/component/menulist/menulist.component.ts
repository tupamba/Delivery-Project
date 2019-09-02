import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MenuListModel, ProductMenu, SectionMenu } from './model-data/menu-list.model';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-menulist',
  templateUrl: './menulist.component.html',
  styleUrls: ['./menulist.component.css']
})
export class MenulistComponent implements OnInit {
  @Input() menuList$: Observable<SectionMenu[]>;
  @Output() addCart: EventEmitter<ProductMenu> = new EventEmitter<ProductMenu>();
  itemList:ProductMenu[] =[];
  itemactive:string = "";
  constructor() { }

  ngOnInit() {
    this.menuList$.subscribe(res =>
      {
        this.itemList = res[0].items;    
      });
  }
  selectItem(item:SectionMenu)
  {
     this.itemactive = item.name;
     this.itemList = item.items;
  }

}
