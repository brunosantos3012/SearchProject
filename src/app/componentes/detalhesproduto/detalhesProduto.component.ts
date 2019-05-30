import { Component, OnInit, Input } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DetalheResponse } from 'src/app/model/detalheResponse.model';

@Component({
  selector: 'app-detalhesproduto',
  templateUrl: './detalhesProduto.component.html',
  styleUrls: ['./detalhesProduto.component.css']
})
export class DetalhesProdutoComponent implements OnInit {

  @Input() item: DetalheResponse;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}
