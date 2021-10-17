import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { MainFormComponent } from './main-form/main-form.component';
import { RouterModule } from '@angular/router';
import { ChooseProductsComponent } from './choose-products/choose-products.component';
import { SummaryComponent } from './summary/summary.component';


@NgModule({
  declarations: [
    HeaderComponent,
    MainMenuComponent,
    MainFormComponent,
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
    MainFormComponent, 
    ChooseProductsComponent,
    SummaryComponent
  ]
})
export class FormPromotionModule { }
