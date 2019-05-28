import { NgModule } from '@angular/core';

import { MenuComponent } from '../componentes/menu/menu.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: []
})
export class MenuModule { }
