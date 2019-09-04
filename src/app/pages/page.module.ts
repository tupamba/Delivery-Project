import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListDeliveriesComponent } from './list-deliveries/list-deliveries.component';
import { BrowserModule } from '@angular/platform-browser';
import { PAGE_ROUTES } from './page.routing';
import { TakeOrderComponent } from './take-order/take-order.component';
import { ComponentModule } from '../component/component.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ListDeliveriesComponent,
    TakeOrderComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ComponentModule,
    SharedModule,
    PAGE_ROUTES
  ],
  exports:[
    ListDeliveriesComponent
  ]
})
export class PageModule { }

