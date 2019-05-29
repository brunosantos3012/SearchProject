import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { InterceptorModule } from './modules/interceptor.module';
import { ItemModule } from './modules/item.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    InterceptorModule,
    ItemModule,
    BrowserModule,
    FormsModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
