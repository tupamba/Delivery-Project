import { MenuDto } from '../../../data-object/menu-dto';
import { MenuListModel, ProductMenu, SectionMenu } from '../../../component/menulist/model-data/menu-list.model';
export class MenuDtoModelMapper {
 public static menudtomappertommodel(source:MenuDto):MenuListModel
 {
    let response = new MenuListModel();
    if(source && source.sections && source.sections.length > 0)
    {
        response.sections = [];
        source.sections.forEach(element => {
            let sec = new SectionMenu();
            sec.name = element.name;
            if(element.products && element.products.length > 0)
            {
                sec.items = [];
                element.products.forEach(prod => {
                    let item = new ProductMenu();
                    item.id = prod.id;
                    item.price = prod.price;
                    item.description = prod.description;
                    sec.items.push(item);
                });
            }
            response.sections.push(sec);
        });
    }
    return response;
 }
}