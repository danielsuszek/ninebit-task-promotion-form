import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { MainFormComponent } from './main-form/main-form.component';
import { RouterModule } from '@angular/router';
import { ChooseProductsComponent } from './choose-products/choose-products.component';


@NgModule({
  declarations: [
    HeaderComponent,
    MainMenuComponent,
    MainFormComponent,
    ChooseProductsComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    MainMenuComponent,
    MainFormComponent, 
    ChooseProductsComponent   
  ]
})
export class FormPromotionModule { }
