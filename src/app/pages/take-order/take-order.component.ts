import { Component, OnInit } from '@angular/core';
import { HttpDataService } from '../../service/http/http-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SectionMenu, ProductMenu } from '../../component/menulist/model-data/menu-list.model';
import { map } from 'rxjs/internal/operators/map';
import { MenuDto } from '../../data-object/menu-dto';
import { MenuDtoModelMapper } from '../../global/helpers/mapper/menudto-model.mapper';
import { Observable } from 'rxjs/internal/Observable';
import { WizardService } from '../../service/wizard/wizard.service';
import { ProductMenuDtoMapper } from '../../global/helpers/mapper/productmenu-dto-model.mapper';
import { CartItem } from '../../component/cart/model-data/cart.model';
import { ItemCartDto } from '../../data-object/cart.dto';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ModalService } from '../../service/modal/modal.service';
import { CartDtoModel } from '../../global/helpers/mapper/cartDto-model.mapper';

@Component({
  selector: 'app-take-order.',
  templateUrl: './take-order.component.html',
  styleUrls: ['./take-order.component.css']
})
export class TakeOrderComponent implements OnInit {
  menu$: Observable<SectionMenu[]>;
  carts$: Observable<ItemCartDto[]>;
  navigationStep:number = 1;
  dataForm: FormGroup;
  deliveryName:string = "";
  jsonConfirm:string;
  constructor(private httpService:HttpDataService,
    private activeroute: ActivatedRoute,
    private serviceWizard:WizardService,
    private router: Router,
    public modal:ModalService) { }

  ngOnInit() {
    this.serviceWizard.setCurrentStep(1);
    this.activeroute.params.subscribe(params => {
    let data = JSON.parse(params['id']);
    this.deliveryName = data.name;
     this.menu$ = this.httpService.getMenu(data.id).pipe(
        map((res:MenuDto) =>
          {
            return MenuDtoModelMapper.menudtomappertommodel(res).sections;
          })
      );
      });
    this.carts$ = this.serviceWizard.getCartList();
    this.dataForm = new FormGroup({
      name : new FormControl(null,[Validators.required]),
      secondname : new FormControl(null,[Validators.required]),
      address : new FormControl(null,[Validators.required]),
      phone : new FormControl(null,[Validators.required]),
      comment : new FormControl(null)
    });
  }
  addCart(item:ProductMenu)
  {
    this.serviceWizard.pushCart(ProductMenuDtoMapper.productmenutomappertodto(item, this.deliveryName))
  }
  removeCart(item:CartItem)
  {
    this.serviceWizard.removeCart(item.product.id)
  }
  navigation(actionNext:boolean)
  {
      if(this.navigationStep == 1)
        this.navigationStep = actionNext? 2:0;     
      else if(this.navigationStep == 2)
      {
        this.navigationStep = actionNext? 2:1;
        if(this.navigationStep == 2)
          this.confirmDelivery();
      }     
      this.serviceWizard.setCurrentStep(this.navigationStep);
      if(this.navigationStep == 0)
        this.router.navigate(['/']);   
  }
  confirmDelivery()
  {
    if(this.dataForm.valid)
    {
      let clientData = this.dataForm.getRawValue();
      let cartItems =  this.serviceWizard.getCartListData();
      this.jsonConfirm = JSON.stringify(CartDtoModel.modeltoCartDto(clientData,cartItems));
      this.modal.modal(true);
     // this.httpService.confirmDelivery(CartDtoModel.modeltoCartDto(clientData,cartItems));
    }
  }
}
