import { NgModule } from "@angular/core";

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { DetalhesprodutoComponent } from '../componentes/detalhesproduto/detalhesproduto.component';

@NgModule({
    declarations: [
      DetalhesprodutoComponent
    ],
    imports: [
      BrowserModule,
      FormsModule
    ],
    providers: [],
    bootstrap: [DetalhesprodutoComponent]
  })
  export class DetalhesProdutoModule { }