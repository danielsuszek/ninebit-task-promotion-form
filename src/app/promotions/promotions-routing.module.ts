import { UpdatePromotionComponent } from './update-promotion/update-promotion.component';
import { DeletePromotionComponent } from './delete-promotion/delete-promotion.component';
import { GetAllPromotionsComponent } from './get-all-promotions/get-all-promotions.component';
import { CreatePromotionComponent } from './create-promotion/create-promotion.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PromotionsComponent } from './promotions.component';

const routes: Routes = [
  { path: '', component: PromotionsComponent },
  { path: 'create', component: CreatePromotionComponent },
  { path: 'list', component: GetAllPromotionsComponent },
  { path: 'update', component: UpdatePromotionComponent },
  { path: 'delete', component: DeletePromotionComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PromotionsRoutingModule { }
