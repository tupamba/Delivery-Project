import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {
  @Input() modalDisplay:Observable<string>;
  constructor() { }

  ngOnInit() {
  }

}
