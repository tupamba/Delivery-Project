import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterComponent } from './filter/filter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ColumnlistComponent } from './columnlist/columnlist.component';
import { ItemlistComponent } from './columnlist/itemlist/itemlist.component';
import { MenulistComponent } from './menulist/menulist.component';
import { CartComponent } from './cart/cart.component';
import { DataformComponent } from './dataform/dataform.component';

@NgModule({
  declarations: [
    FilterComponent,
    ColumnlistComponent,
    ItemlistComponent,
    MenulistComponent,
    CartComponent,
    DataformComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports:[
    FilterComponent,
    ColumnlistComponent,
    MenulistComponent,
    CartComponent,
    DataformComponent
  ]
})
export class ComponentModule { }
