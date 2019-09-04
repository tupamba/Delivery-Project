import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { WizardService } from '../../service/wizard/wizard.service';

@Component({
  selector: 'app-wizardbar',
  templateUrl: './wizardbar.component.html',
  styleUrls: ['./wizardbar.component.css']
})
export class WizardbarComponent implements OnInit, OnDestroy {

  @Input() stepList:string[];
  @Input() currentStep:number;
  barWidth:string = "100%";
  private suscribe:Subscription;
  constructor(private service:WizardService) { }
  ngOnDestroy(): void {
    this.suscribe.unsubscribe();
  }
  ngOnInit() {
    this.barWidth = (100 / this.stepList.length).toString() + "%";
    this.suscribe =  this.service.getCurrentStep().subscribe((step) => {
      this.currentStep = step;
    });
  }


}
