import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormPromotionModule } from './form-promotion/form-promotion.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormPromotionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
