import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { WizardbarComponent } from './wizardbar/wizardbar.component';
import { ModalComponent } from './modal/modal.component';
import { SpinnerComponent } from './spinner/spinner.component';

@NgModule({
  declarations: [
    HeaderComponent,
    WizardbarComponent,
    ModalComponent,
    SpinnerComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HeaderComponent,
    WizardbarComponent,
    ModalComponent,
    SpinnerComponent
  ]
})
export class SharedModule { }
