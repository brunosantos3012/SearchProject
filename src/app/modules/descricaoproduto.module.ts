import { NgModule } from "@angular/core";

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { DescricaoprodutoComponent } from '../componentes/descricaoproduto/descricaoproduto.component';

@NgModule({
    declarations: [
      DescricaoprodutoComponent
    ],
    imports: [
      BrowserModule,
      FormsModule
    ],
    providers: [],
    bootstrap: [DescricaoprodutoComponent]
  })
  export class DescricaoProdutoModule { }