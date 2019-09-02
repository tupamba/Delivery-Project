import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';
import { DeliveryDto } from '../../data-object/delivery-dto';
import { FilterQueryModel } from '../../component/filter/model-data/filter-query.model';
import { CartDto, ItemCartDto } from '../../data-object/cart.dto';
import { Product } from '../../data-object/menu-dto';

@Injectable({
  providedIn: 'root'
})
export class WizardbarService {
  private stepSubject$ = new BehaviorSubject<number>(0);
  private deliverySubject$ = new BehaviorSubject<DeliveryDto[]>(null);
  private cartSubject$ = new BehaviorSubject<ItemCartDto[]>(null);
  private deliveries:DeliveryDto[];
  private cartList:ItemCartDto[] = [];
  constructor() { }
  getCurrentStep(): Observable<number> {
    return this.stepSubject$.asObservable();
  }
  getCartList(): Observable<ItemCartDto[]>
  {
    return this.cartSubject$.asObservable();
  }
  setCurrentStep(step:number)
  {
    this.stepSubject$.next(step);
  }
  pushCart(data:Product)
  {
    if(!this.cartList)
      this.cartList = [];
    let prod = this.cartList.find(x => x.product.id == data.id);
    if(this.cartList.length == 0 || !prod)
    {
      let item = new ItemCartDto();
      item.product = data;
      item.count = 1;
      this.cartList.push(item);
      this.cartSubject$.next(this.cartList);
      }
  }
  removeCart(id:number)
  {
    if(this.cartList)
    {
      let prod = this.cartList.find(x => x.product.id == id);
      const index = this.cartList.indexOf(prod, 0);
      if (index > -1) {
        this.cartList.splice(index, 1);
      }
      this.cartSubject$.next(this.cartList);
    }
  }
  setMemoryDeliveries(value:DeliveryDto[])
  {
    this.deliveries = value;
    this.deliverySubject$ = new BehaviorSubject<DeliveryDto[]>(value);
    return this.deliverySubject$.asObservable();
  }

  filterListData(filter:FilterQueryModel)
  {
    let l = this.deliveries.filter(x => 
      x.name.includes(
        filter.filterResult.findIndex(k => x[k.key] && x[k.key] != "") > -1 &&
        filter.filterResult.filter(k => x[k.key] && x[k.key] != "")[0].value));
    return this.deliverySubject$.next(l);
  }

  }
