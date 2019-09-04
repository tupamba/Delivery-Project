import { Product } from './menu-dto';
export class CartDto {
    public items:ItemCartDto[];
    public total:number; 
    public clientData:ClientData;
    public date:Date;
}
export class ItemCartDto
{
    public product:Product;
    public count:number;
}
export class ClientData
{
    public Name:string;
    public SecondName:string;
    public Address:string;
    public Phone:string;
    public Comment:string
}