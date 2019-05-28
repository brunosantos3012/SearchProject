import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { DetalhesprodutoComponent } from '../componentes/detalhesproduto/detalhesproduto.component';
import { DescricaoProdutoModule } from './descricaoproduto.module';


@NgModule({
  declarations: [
    DetalhesprodutoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DescricaoProdutoModule
  ],
  providers: []
})
export class DetalhesProdutoModule { }
