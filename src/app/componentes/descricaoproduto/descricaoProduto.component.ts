import { Component, OnInit, Input } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DetalhesProdutoComponent } from '../detalhesproduto/detalhesProduto.component';
import { DetalheResponse } from 'src/app/model/detalheResponse.model';


@Component({
  selector: 'app-descricaoproduto',
  templateUrl: './descricaoProduto.component.html',
  styleUrls: ['./descricaoProduto.component.css'],
})
export class DescricaoProdutoComponent implements OnInit {

  @Input() recebeResponseDetalhe;

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  OpenModal(item: DetalheResponse) {
    const modalRef = this.modalService.open(DetalhesProdutoComponent);
    modalRef.componentInstance.item = item;
  }
}
