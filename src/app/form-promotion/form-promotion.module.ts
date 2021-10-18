import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { RouterModule } from '@angular/router';
import { ChooseProductsComponent } from './choose-products/choose-products.component';
import { SummaryComponent } from './summary/summary.component';

@NgModule({
  declarations: [
    HeaderComponent,
    MainMenuComponent,
    ChooseProductsComponent,
    SummaryComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    MainMenuComponent,
    ChooseProductsComponent,
    SummaryComponent
  ]
})
export class FormPromotionModule { }
