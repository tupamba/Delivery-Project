import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { WizardbarComponent } from './wizardbar/wizardbar.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
    HeaderComponent,
    WizardbarComponent,
    ModalComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HeaderComponent,
    WizardbarComponent,
    ModalComponent
  ]
})
export class SharedModule { }
