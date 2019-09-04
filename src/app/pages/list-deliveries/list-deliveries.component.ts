import { Component, OnInit } from '@angular/core';
import { WizardService } from '../../service/wizard/wizard.service';
import { Logger } from '../../global/logger';
import { ItemListModel } from '../../component/columnlist/model-data/item-list.model';
import { HttpDataService } from '../../service/http/http-data.service';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/internal/operators/map';
import { DeliveryDto } from '../../data-object/delivery-dto';
import { Router } from '@angular/router';
import { DeliveryDtoItemListModelMapper } from '../../global/helpers/mapper/deliveryDto-item-list-model.mapper';


@Component({
  selector: 'app-list-deliveries',
  templateUrl: './list-deliveries.component.html',
  styleUrls: ['./list-deliveries.component.css']
})
export class ListDeliveriesComponent implements OnInit {
  filterQuestions = [];
  public data$: Observable<ItemListModel[]>;
  constructor(public serviceWizard:WizardService,
    private httpService:HttpDataService,
    private router: Router,) { 
    this.filterQuestions = [{key:"name",default:"",description:"Nombre",placeHolder:"Nombre"},{key:"description",default:"",description:"Descripcion",placeHolder:"Descripcion"}];
  }

  ngOnInit() {
    this.getDeleiveries();
  }
  getDeleiveries()
  {
    if(!this.serviceWizard.existDeliveryList())
     this.httpService.getDeliveries().subscribe(result =>
        {
          this.data$ = this.serviceWizard.setMemoryDeliveries(result).pipe(
            map((data:DeliveryDto[]) =>
            {
              return DeliveryDtoItemListModelMapper.deliverydtotoitemlistmodel(data);
            })
          );
        });
    else
    {
      this.data$ = this.serviceWizard.getDeliveryList().pipe(
        map((data:DeliveryDto[]) =>
        {
          return DeliveryDtoItemListModelMapper.deliverydtotoitemlistmodel(data);
        })
      );
      this.serviceWizard.filterListData(null);
    }
  }
  filterList(filter)
  {
    Logger.log("filterList " + JSON.stringify(filter));
    this.serviceWizard.filterListData(filter);
  }
  selectItem(item:ItemListModel)
  {
    Logger.log(JSON.stringify(item));
    this.router.navigate(['/takeOrder',JSON.stringify({id:item.id,name:item.title})]);
  }
}
