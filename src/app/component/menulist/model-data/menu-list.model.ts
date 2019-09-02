export class MenuListModel {
    public sections:SectionMenu[];
}
export class SectionMenu {
    public name:string;
    public items:ProductMenu[];
}
export class ProductMenu
{
    public id:number;
    public description:string;
    public price:number;
    public incart:boolean;
}