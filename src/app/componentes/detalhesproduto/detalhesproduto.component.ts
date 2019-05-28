import { Component, OnInit, Input } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DetalheResponse } from 'src/app/model/detalheResponse.model';

@Component({
  selector: 'app-detalhesproduto',
  templateUrl: './detalhesproduto.component.html',
  styleUrls: ['./detalhesproduto.component.css']
})
export class DetalhesprodutoComponent implements OnInit {

  @Input() item: DetalheResponse;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}
