import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';
import { mergeMap } from 'rxjs/internal/operators/mergeMap';
import { materialize } from 'rxjs/internal/operators/materialize';
import { delay } from 'rxjs/internal/operators/delay';
import { dematerialize } from 'rxjs/internal/operators/dematerialize';
import { GlobalConfig } from '../../global/global-config';
import { ModalService } from '../modal/modal.service';
import { finalize } from 'rxjs/internal/operators/finalize';

@Injectable({
  providedIn: 'root'
})
export class HttpmoqService implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.modal.modalSpinner(true);
    return of(null).pipe(mergeMap(() => {
      if (GlobalConfig.httpServiceMoq) {
        if (request.url.endsWith('/') &&
          request.method === 'GET') {
          let body = [{"id":1,"name":"La Pasiva","products":["Panchos","Pizza"]},
          {"id":2,"name":"Artico","products":["Chivitos","Pizza"]}];
          this.modal.modalSpinner(false)
          return of(new HttpResponse({ status: 200, body: body }));
        }
        if (request.url.includes('/getMenu') &&
          request.method === 'GET') {
          let body = {"sections":[
            {"name":"Pastas","products":[
              {"description":"Fideos con tuco","price":110.0,"id":1},
              {"description":"Ravioles con tuco","price":110.0,"id":2},
              {"description":"Sorrentinos con tuco","price":110.50,"id":3}]},
            {"name":"Carnes","products":[
              {"description":"Asado","price":200.0,"id":4},
              {"description":"Chorizo","price":180.0,"id":5},
              {"description":"Milanesa","price":190.0,"id":6}]},
            {"name":"Postres","products":[
              {"description":"Arroz con leche","price":175.0,"id":7}]}]};
              this.modal.modalSpinner(false)
          return of(new HttpResponse({ status: 200, body: body }));
        }
        if (request.url.endsWith('/confirmDelivery') &&
        request.method === 'POST') {
        let body = {"code":0};
        this.modal.modalSpinner(false)
        return of(new HttpResponse({ status: 200, body: body }));
      }
      } else
      console.log("Mock false");
    return next.handle(request)
    }))
    .pipe(materialize())
    .pipe(delay(500))
    .pipe(dematerialize())
    .pipe(finalize(() => this.modal.modalSpinner(false))); 
  }

  constructor(public modal:ModalService) { }
}
