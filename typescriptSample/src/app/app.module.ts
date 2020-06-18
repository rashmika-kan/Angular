import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { MobileComponent } from './product/gadget/mobile.component';
import { StryComponent } from './stry/stry.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    MobileComponent,
    StryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
