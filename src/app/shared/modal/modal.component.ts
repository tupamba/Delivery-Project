import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ModalService } from '../../service/modal/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input() modalDisplay:Observable<string>;
  @Input() title:string;
  @Input() messagge:string;
  constructor(public modal:ModalService) { }

  ngOnInit() {
  }

}
