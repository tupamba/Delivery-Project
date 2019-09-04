import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';
import { DeliveryDto } from '../../data-object/delivery-dto';
import { FilterQueryModel } from '../../component/filter/model-data/filter-query.model';
import { ItemCartDto } from '../../data-object/cart.dto';
import { Product } from '../../data-object/menu-dto';

@Injectable({
  providedIn: 'root'
})
export class WizardService {
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
  getDeliveryList(): Observable<DeliveryDto[]>
  {
    return this.deliverySubject$.asObservable();
  }
  getCartListData(): ItemCartDto[]
  {
    return this.cartList;
  }
  existDeliveryList():boolean
  {
    return this.deliveries && this.deliveries.length > 0;
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
    let l = this.deliveries;
    if(filter != null && filter.filterResult && filter.filterResult[0].value != "")
    {
     l = this.deliveries.filter(x => 
      x.name.toUpperCase().includes(
        filter.filterResult.findIndex(k => k.key == "name" && x[k.key] && x[k.key] != "") > -1 &&
        filter.filterResult.filter(k => x[k.key] && x[k.key] != "")[0].value.toUpperCase()));
        if(filter.filterResult[1].value != "")
          l = l.filter(x => 
      x.products.findIndex(k => !k.toUpperCase().includes(filter.filterResult[1].value.toUpperCase())));
    }
    return this.deliverySubject$.next(l);
  }

  }
