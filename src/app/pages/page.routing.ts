import { Routes, RouterModule } from '@angular/router';
import { ListDeliveriesComponent } from './list-deliveries/list-deliveries.component';
import { TakeOrderComponent } from './take-order/take-order.component';

const pagesRoutes: Routes = [
  {path: '',component: ListDeliveriesComponent},
  { path: 'takeOrder/:id', component: TakeOrderComponent, data:{title:"StepOne"}}
]
export const PAGE_ROUTES = RouterModule.forChild(pagesRoutes);
export class PagesRoutes { }