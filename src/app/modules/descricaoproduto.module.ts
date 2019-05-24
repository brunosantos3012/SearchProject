import { NgModule } from "@angular/core";

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { DescricaoprodutoComponent } from '../componentes/descricaoproduto/descricaoproduto.component';
import { MenuComponent } from '../componentes/menu/menu.component';

@NgModule({
    declarations: [
      DescricaoprodutoComponent,
      MenuComponent
    ],
    imports: [
      BrowserModule,
      FormsModule
    ],
    providers: [],
    bootstrap: [DescricaoprodutoComponent]
  })
  export class DescricaoProdutoModule { }