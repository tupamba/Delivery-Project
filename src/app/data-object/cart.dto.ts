import { Product } from './menu-dto';
export class CartDto {
    public items:ItemCartDto[];
    public total:number; 
}
export class ItemCartDto
{
    public product:Product;
    public count:number;
}