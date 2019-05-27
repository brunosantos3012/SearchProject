import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu/menu.service';
import { BuscaItem } from 'src/app/model/buscaItem.model';
import { Estoque } from 'src/app/model/estoque.model';
import { HttpParams } from '@angular/common/http';
import { _keyValueDiffersFactory } from '@angular/core/src/application_module';
import { Preco } from 'src/app/model/preco.model';
import { DetalhePost } from 'src/app/model/detalhePost.model';
import { Itens } from 'src/app/model/itens.model';
import { DetalheResponse } from 'src/app/model/detalheResponse.model';

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

  constructor(private menuService: MenuService) { }

  ngOnInit() {
  }

  BuscaProdutos() {
    this.listObject = new Array();
    this.menuService.SearchAll(this.nomePesquisa).subscribe((response: any) => {
      this.listObject = response;
      this.BuscaEstoque();
      this.BuscaPreco();
      this.BuscaDetalhe();
    });
  }

  BuscaEstoque() {
    var parametros = new HttpParams();
    for (let i = 0; i < this.listObject.length; i++) {
      parametros = parametros.append('itens', this.listObject[i].codigoItem.toString());
    }
    const options = { params: parametros }
    this.menuService.BuscaEstoque(options).subscribe((response: any) => {
      this.estoqueObject = response;
    });
  }

  BuscaPreco() {
    var parametros = new HttpParams();
    for (let i = 0; i < this.listObject.length; i++) {
      parametros = parametros.append('item', this.listObject[i].codigoItem.toString());
    }
    const options = { params: parametros }
    this.menuService.BuscaPreco(options).subscribe((response: any) => {
      this.precoObject = response;
    });
  }

  BuscaDetalhe() {
    const responseDetalhe: DetalhePost = new DetalhePost();
    this.listObject.map(item => {
      let itens: Itens = new Itens();
      itens.codigo = item.codigoItem
      responseDetalhe.itens.push(itens)
    });
    this.menuService.BuscaDetalhe(responseDetalhe).subscribe((response: any) => {
      this.detalheObject = response.itens;
      this.responseDetalhe = response.itens;
    });
  }

  teste() {
    this.responseDetalhe.forEach((item, index) => {
      const estoqueFiltrado = this.estoqueObject.find((filtroEstoque) =>
        filtroEstoque.codigoItem == item.codigoItem);
      const precoFiltrado = this.precoObject.find((filtroPreco) =>
        filtroPreco.codigoItem == item.codigoItem);
      item.estoque = estoqueFiltrado.estoqueLoja;
      item.preco = precoFiltrado.preco;
    });
  }


}
