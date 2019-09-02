import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WizardbarService } from './wizardbar/wizardbar.service';
import { HttpDataService } from './http/http-data.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpmoqService } from './http/httpmoq.service';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: HttpmoqService,
    multi: true
  },
    WizardbarService,
    HttpDataService
  ]
})
export class ServiceModule { }
