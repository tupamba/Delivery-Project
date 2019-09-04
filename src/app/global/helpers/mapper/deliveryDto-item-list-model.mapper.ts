import { DeliveryDto } from '../../../data-object/delivery-dto';
import { ItemListModel } from '../../../component/columnlist/model-data/item-list.model';
export class DeliveryDtoItemListModelMapper {
    public static deliverydtotoitemlistmodel(source:DeliveryDto[]):ItemListModel[]
    {
        let res:ItemListModel
        let result:ItemListModel[] = [];
        if(source)
        {
        source.forEach(element => {
            res =  new ItemListModel();
            res.title = element.name;
            res.actionText = "Realizar pedido";
            res.items = element.products;
            res.id = element.id;
            result.push(res);
        });
        }
        return result;
    }
}