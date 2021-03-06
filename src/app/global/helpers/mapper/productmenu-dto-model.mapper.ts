import { ProductMenu } from '../../../component/menulist/model-data/menu-list.model';
import { Product } from '../../../data-object/menu-dto';
export class ProductMenuDtoMapper {
    public static productmenutomappertodto(source:ProductMenu, deliveryName:string = ""):Product
    {
        let response = new Product();
        if(source)
        {
            response.id = source.id;
            response.description = source.description;
            response.price = source.price;
            response.deliveryName = deliveryName;
        }
        return response;
    }
}