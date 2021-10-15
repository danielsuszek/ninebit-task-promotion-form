import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { MainFormComponent } from './main-form/main-form.component';



@NgModule({
  declarations: [
    HeaderComponent,
    MainMenuComponent,
    MainFormComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    MainMenuComponent,
    MainFormComponent,    
  ]
})
export class FormPromotionModule { }
