import { CreatePromotionComponent } from './create-promotion/create-promotion.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PromotionsComponent } from './promotions.component';

const routes: Routes = [
  { path: '', component: PromotionsComponent },
  { path: 'create-promotion', component: CreatePromotionComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PromotionsRoutingModule { }
