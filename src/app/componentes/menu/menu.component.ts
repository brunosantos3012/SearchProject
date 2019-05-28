import { Component, OnInit } from '@angular/core';
import { BuscaItem } from 'src/app/model/buscaItem.model';
import { Estoque } from 'src/app/model/estoque.model';
import { HttpParams } from '@angular/common/http';
import { _keyValueDiffersFactory } from '@angular/core/src/application_module';
import { Preco } from 'src/app/model/preco.model';
import { DetalhePost } from 'src/app/model/detalhePost.model';
import { Itens } from 'src/app/model/itens.model';
import { DetalheResponse } from 'src/app/model/detalheResponse.model';
import { SearchAllService } from 'src/app/services/searchAll/searchall.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public listObject: Array<BuscaItem>;
  public estoqueObject: Array<Estoque>;
  public precoObject: Array<Preco>;
  public detalheObject: Array<DetalhePost>;
  public responseDetalhe: Array<DetalheResponse> = new Array<DetalheResponse>();
  nomePesquisa: string;
  codigoEstoque: number

  constructor(private service: SearchAllService) { }

  ngOnInit() {
  }

  BuscaProdutos() {
    this.listObject = new Array();
    this.service.BuscaNome(this.nomePesquisa).subscribe((response: any) => {
      this.listObject = response;
      this.BuscaDetalhe();
    });
  }

  BuscaDetalhe() {
    const responseDetalhe: DetalhePost = new DetalhePost();
    this.listObject.map(item => {
      let itens: Itens = new Itens();
      itens.codigo = item.codigoItem
      responseDetalhe.itens.push(itens)
    });
    this.service.BuscaDetalhe(responseDetalhe).subscribe((response: any) => {
      this.responseDetalhe = response.itens;
      this.BuscaEstoque();
      this.BuscaPreco();
    });
  }

  BuscaEstoque() {
    var parametros = new HttpParams();
    for (let i = 0; i < this.responseDetalhe.length; i++) {
      parametros = parametros.append('itens', this.responseDetalhe[i].codigo.toString());
    }
    const options = { params: parametros }
    this.service.BuscaEstoque(options).subscribe((response: any) => {
      this.estoqueObject = response;
    });
  }

  BuscaPreco() {
    var parametros = new HttpParams();
    for (let i = 0; i < this.responseDetalhe.length; i++) {
      parametros = parametros.append('item', this.responseDetalhe[i].codigo.toString());
    }
    const options = { params: parametros }
    this.service.BuscaPreco(options).subscribe((response: any) => {
      this.precoObject = response;
      this.AtualizandoLista();
    });
  }

  AtualizandoLista() {
    this.responseDetalhe.forEach((item) => {
      const estoqueFiltrado = this.estoqueObject.find((filtroEstoque) =>
        filtroEstoque.codigoItem == item.codigo);
      const precoFiltrado = this.precoObject.find((filtroPreco) =>
        filtroPreco.codigoItem == item.codigo);
      item.estoque = estoqueFiltrado.estoqueLoja;
      item.preco = precoFiltrado.preco;
    });
  }


}
