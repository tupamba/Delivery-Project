import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { StepOneComponent } from './step-one/step-one.component';

const pagesRoutes: Routes = [
  {path: '',component: MainComponent},
  { path: 'stepOne/:id', component: StepOneComponent, data:{title:"StepOne"}}
]
export const PAGE_ROUTES = RouterModule.forChild(pagesRoutes);
export class PagesRoutes { }