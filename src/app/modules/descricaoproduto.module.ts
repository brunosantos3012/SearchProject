import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { DescricaoprodutoComponent } from '../componentes/descricaoproduto/descricaoproduto.component';
import { NgbModule, NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DetalhesprodutoComponent } from '../componentes/detalhesproduto/detalhesproduto.component';

@NgModule({
  declarations: [
    DescricaoprodutoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule

  ],
  providers: [NgbModal, NgbActiveModal],
  entryComponents: [DetalhesprodutoComponent]
})
export class DescricaoProdutoModule { }
