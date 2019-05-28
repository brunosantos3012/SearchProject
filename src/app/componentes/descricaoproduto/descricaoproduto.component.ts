import { Component, OnInit, Input } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DetalhesprodutoComponent } from '../detalhesproduto/detalhesproduto.component';
import { DetalheResponse } from 'src/app/model/detalheResponse.model';


@Component({
  selector: 'app-descricaoproduto',
  templateUrl: './descricaoproduto.component.html',
  styleUrls: ['./descricaoproduto.component.css'],
})
export class DescricaoprodutoComponent implements OnInit {

  @Input() recebeResponseDetalhe;

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  OpenModal(item: DetalheResponse) {
    const modalRef = this.modalService.open(DetalhesprodutoComponent);
    modalRef.componentInstance.item = item;
    console.log(item)
  }
}
