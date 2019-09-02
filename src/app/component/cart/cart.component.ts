import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { CartItem } from './model-data/cart.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  @Input() cartList$: Observable<CartItem[]>;
  @Output() removeCart: EventEmitter<CartItem> = new EventEmitter<CartItem>();
  total:number;
  totalList: CartItem[];
  constructor() { }

  ngOnInit() {
    this.cartList$.subscribe(
      (result) =>
      {
        if(result)
        {
          this.totalList = result;
          this.total = result.reduce((currentValue: number = 0, cart: CartItem) => {
            return currentValue = currentValue + (cart.product.price * cart.count);
          }, 0);
      }
      }
    );
  }
  trackByIndex(index: number, obj: any): any {
    return index;
  }
  udateTotal(item:CartItem)
  {
    this.totalList.find(x => x.product.id == item.product.id).count = item.count;
    this.total = this.totalList.reduce((currentValue: number = 0, cart: CartItem) => {
      return currentValue = currentValue + (cart.product.price * cart.count);
    }, 0);
  }
}
