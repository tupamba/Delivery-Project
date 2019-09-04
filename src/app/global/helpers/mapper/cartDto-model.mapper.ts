import { ClientData, ItemCartDto, CartDto } from '../../../data-object/cart.dto';
export class CartDtoModel {
    public static modeltoCartDto(client:any, items:ItemCartDto[]):CartDto
    {
        let response = new CartDto();
        if(client)
        {
            response.date = new Date();
            response.clientData = new ClientData();
            response.clientData.Name = client.name;
            response.clientData.SecondName = client.secondName;
            response.clientData.Address = client.address;
            response.clientData.Phone = client.phone;
            response.clientData.Comment = client.comment;  
        }
        response.items = items? items:[];
        return response;
    }
}