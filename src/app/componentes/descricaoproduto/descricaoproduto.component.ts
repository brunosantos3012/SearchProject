import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-descricaoproduto',
  templateUrl: './descricaoproduto.component.html',
  styleUrls: ['./descricaoproduto.component.css'],
})
export class DescricaoprodutoComponent implements OnInit {

  @Input() recebeResponseDetalhe;
 
  constructor() { }

  ngOnInit() {
  }

}
