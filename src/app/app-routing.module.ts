import { SummaryComponent } from './form-promotion/summary/summary.component';
import { ChooseProductsComponent } from './form-promotion/choose-products/choose-products.component';
import { MainFormComponent } from './form-promotion/main-form/main-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: MainFormComponent},
  { path: 'choose-products', component: ChooseProductsComponent},
  // { path: 'promotions', component: SummaryComponent},
  { path: 'promotions', loadChildren: () => import('./promotions/promotions.module').then(m => m.PromotionsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
