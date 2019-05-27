import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu/menu.service';
import { BuscaItem } from 'src/app/model/buscaItem.model';
import { Estoque } from 'src/app/model/estoque.model';
import { HttpParams } from '@angular/common/http';
import { _keyValueDiffersFactory } from '@angular/core/src/application_module';
import { Preco } from 'src/app/model/preco.model';
import { DetalhePost } from 'src/app/model/detalhePost.model';
import { Itens } from 'src/app/model/itens.model';

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
  nomePesquisa: string;
  codigoEstoque: number

  constructor(private menuService: MenuService) { }

  ngOnInit() {
  }

  public getService() {
    return this.menuService;
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
      console.log(this.detalheObject);
    });
  }

}
