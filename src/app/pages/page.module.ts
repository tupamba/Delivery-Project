import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { BrowserModule } from '@angular/platform-browser';
import { PAGE_ROUTES } from './page.routing';
import { StepOneComponent } from './step-one/step-one.component';
import { ComponentModule } from '../component/component.module';

@NgModule({
  declarations: [
    MainComponent,
    StepOneComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ComponentModule,
    PAGE_ROUTES
  ],
  exports:[
    MainComponent
  ]
})
export class PageModule { }

