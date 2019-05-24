import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { MenuService } from 'src/app/services/menu/menu.service';
import { BuscaItem } from 'src/app/model/buscaItem.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public listObject: Array<BuscaItem>;
  nomePesquisa: string;

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
    });
  }

}
