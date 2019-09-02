import { Component, OnInit } from '@angular/core';
import { WizardbarService } from '../../service/wizardbar/wizardbar.service';
import { Logger } from '../../global/logger';
import { ListModel } from '../../component/columnlist/model-data/list.model';
import { ItemListModel } from '../../component/columnlist/model-data/item-list.model';
import { HttpDataService } from '../../service/http/http-data.service';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/internal/operators/map';
import { DeliveryDto } from '../../data-object/delivery-dto';
import { Router } from '@angular/router';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  filterQuestions = [];
  public data$: Observable<ItemListModel[]>;
  constructor(public serviceWizard:WizardbarService,
    private httpService:HttpDataService,
    private router: Router,) { 
    this.filterQuestions = [{key:"name",default:"",description:"Nombre",placeHolder:"Nombre"},{key:"description",default:"",description:"Descripcion",placeHolder:"Descripcion"}];
  }

  ngOnInit() {
    this.getDeleiveries();
  }
  getDeleiveries()
  {
     this.httpService.getDeliveries().subscribe(result =>
        {
          this.data$ = this.serviceWizard.setMemoryDeliveries(result).pipe(
            map((data:DeliveryDto[]) =>
            {
              let res:ItemListModel
              let result:ItemListModel[] = [];
              if(data)
              {
                data.forEach(element => {
                  res =  new ItemListModel();
                  res.title = element.name;
                  res.actionText = "Realizar pedido";
                  res.items = element.products;
                  result.push(res);
                });
              }
              return result;
            })
          );
        });
  }
  filterList(filter)
  {
    Logger.log("filterList " + JSON.stringify(filter));
    this.serviceWizard.filterListData(filter);
  }
  selectItem(item:ItemListModel)
  {
    Logger.log(JSON.stringify(item));
    this.router.navigate(['/stepOne',item.title]);
  }
}
