import { CreatePromotionComponent } from './promotions/create-promotion/create-promotion.component';
import { SummaryComponent } from './form-promotion/summary/summary.component';
import { ChooseProductsComponent } from './form-promotion/choose-products/choose-products.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: CreatePromotionComponent},
  { path: 'choose-products', component: ChooseProductsComponent},
  // { path: 'promotions', component: SummaryComponent},
  { path: 'promotions', loadChildren: () => import('./promotions/promotions.module').then(m => m.PromotionsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
