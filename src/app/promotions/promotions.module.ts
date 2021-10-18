import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PromotionsRoutingModule } from './promotions-routing.module';
import { PromotionsComponent } from './promotions.component';
import { CreatePromotionComponent } from './create-promotion/create-promotion.component';
import { GetAllPromotionsComponent } from './get-all-promotions/get-all-promotions.component';
import { UpdatePromotionComponent } from './update-promotion/update-promotion.component';
import { DeletePromotionComponent } from './delete-promotion/delete-promotion.component';


@NgModule({
  declarations: [
    PromotionsComponent,
    CreatePromotionComponent,
    GetAllPromotionsComponent,
    UpdatePromotionComponent,
    DeletePromotionComponent
  ],
  imports: [
    CommonModule,
    PromotionsRoutingModule
  ]
})
export class PromotionsModule { }
