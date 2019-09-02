import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient,HttpResponse,HttpHeaders } from '@angular/common/http';
import { timeout } from 'rxjs/internal/operators/timeout';
import { catchError } from 'rxjs/internal/operators/catchError';
import { throwError } from 'rxjs/internal/observable/throwError';
import { GlobalConfig } from '../../global/global-config';
import { map } from 'rxjs/internal/operators/map';
import { DeliveryDto } from '../../data-object/delivery-dto';
import { MenuDto } from '../../data-object/menu-dto';
import { Logger } from '../../global/logger';
@Injectable({
  providedIn: 'root'
})
export class HttpDataService {

  constructor(private http: HttpClient) { }
  getDeliveries(): Observable<DeliveryDto[]> {
        return this.http.get<DeliveryDto[]>(
        GlobalConfig.urlDelivery + "getDelivery", { observe: 'response' }).pipe
        (
          timeout(30000),
          map(res => 
          {
            if(res.status == 200)
              return res.body
            else
            return null;
          }));
    }
    getMenu(menutitle:string): Observable<MenuDto> {
      return this.http.get<MenuDto>(
      GlobalConfig.urlDelivery + "getMenu/" + menutitle, { observe: 'response' }).pipe
      (
        timeout(30000),
        map(res => 
        {
          if(res.status == 200)
          {
            return res.body
          }
          else
          return null;
        }));
  }
  executepost(data: any, service: string, url: string): Observable<HttpResponse<any>> {
    let _url = "";//this.getUrlService(service, url);
    let head: HttpHeaders = new HttpHeaders();
    head = head.append('Content-Type', 'text/plain;charset=UTF-8');
    // head = head.set('X-Requested-With', 'XMLHttpRequest');
    return this.http.post<any>(_url, data, { observe: 'response', headers: head }).
      pipe(
        timeout(30000),
        catchError((error, caught) => {
          console.log("catchError " + error);
          return throwError(error);
        }));
  }
}
