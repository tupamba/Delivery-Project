import { Component, OnInit } from '@angular/core';
import { HttpDataService } from '../../service/http/http-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SectionMenu, ProductMenu } from '../../component/menulist/model-data/menu-list.model';
import { map } from 'rxjs/internal/operators/map';
import { MenuDto } from '../../data-object/menu-dto';
import { MenuDtoModelMapper } from '../../global/helpers/mapper/menudto-model.mapper';
import { Observable } from 'rxjs/internal/Observable';
import { WizardbarService } from '../../service/wizardbar/wizardbar.service';
import { ProductMenuDtoMapper } from '../../global/helpers/mapper/productmenu-dto-model';
import { CartItem } from '../../component/cart/model-data/cart.model';
import { ItemCartDto } from '../../data-object/cart.dto';

@Component({
  selector: 'app-step-one',
  templateUrl: './step-one.component.html',
  styleUrls: ['./step-one.component.css']
})
export class StepOneComponent implements OnInit {
  menu$: Observable<SectionMenu[]>;
  carts$: Observable<ItemCartDto[]>;
  navigationStep:number = 1;
  constructor(private httpService:HttpDataService,
    private activeroute: ActivatedRoute,
    private serviceWizard:WizardbarService,
    private router: Router) { }

  ngOnInit() {
    this.serviceWizard.setCurrentStep(1);
    this.activeroute.params.subscribe(params => {
      let id = params['id'];
     this.menu$ = this.httpService.getMenu(id).pipe(
        map((res:MenuDto) =>
          {
            return MenuDtoModelMapper.menudtomappertommodel(res).sections;
          })
      );
  });
  this.carts$ = this.serviceWizard.getCartList();
  }
  addCart(item:ProductMenu)
  {
    this.serviceWizard.pushCart(ProductMenuDtoMapper.productmenutomappertodto(item))
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
      }     
      this.serviceWizard.setCurrentStep(this.navigationStep);
      if(this.navigationStep == 0)
        this.router.navigate(['/']);   
  }
}
