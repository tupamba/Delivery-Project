import { ProductMenu } from '../../menulist/model-data/menu-list.model';
export class CartModel {
    public items:CartItem[];
}
export class CartItem
{
    public product:ProductMenu;
    public count:number = 1;
}