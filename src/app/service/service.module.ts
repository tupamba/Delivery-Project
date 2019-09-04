import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WizardService } from './wizard/wizard.service';
import { HttpDataService } from './http/http-data.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpmoqService } from './http/httpmoq.service';
import { ModalService } from './modal/modal.service';

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
    WizardService,
    HttpDataService,
    ModalService
  ]
})
export class ServiceModule { }
