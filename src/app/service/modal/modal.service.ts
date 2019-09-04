import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private modalSubject$ = new BehaviorSubject<string>('none');
  private spinnerSubject$ = new BehaviorSubject<string>('none');
  constructor() { }
  getModalSpinner():Observable<string>
  {
    return this.spinnerSubject$.asObservable();
  }
  modalSpinner(show:boolean)
  {
    if(show)
     this.spinnerSubject$.next('block');
    else
    this.spinnerSubject$.next('none');
  }
  getModal():Observable<string>
  {
    return this.modalSubject$.asObservable();
  }
  modal(show:boolean)
  {
    if(show)
     this.modalSubject$.next('block');
    else
    this.modalSubject$.next('none');
  }
}
