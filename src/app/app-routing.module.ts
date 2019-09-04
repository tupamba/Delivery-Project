import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListDeliveriesComponent } from './pages/list-deliveries/list-deliveries.component';

const routes: Routes = [
  { path: '', component: ListDeliveriesComponent, data:{title:"MainComponent"}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
