export class MenuDto {
    public deliveryid:number;
    public sections:Section[];
}
export class Section {
    public name:string;
    public products:Product[];
}
export class Product {
    public id:number;
    public description:string;
    public price:number;
}