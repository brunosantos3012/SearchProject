import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuComponent } from './menu.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { ItemModule } from 'src/app/modules/item.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { SearchAllService } from 'src/app/services/searchAll/searchall.service';
import { DetalhesProdutoComponentStub as stub } from '../mock/detalhesProduto.component.stub';
import { of } from 'rxjs';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;
  let service: SearchAllService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ItemModule, AppRoutingModule],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
      providers: [HttpClient, HttpHandler,
        { provide: SearchAllService, useClass: stub }
      ]
    })
      .compileComponents()
      .then(() => {
        service = TestBed.get(SearchAllService);
      });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('devera ser criado', () => {
    expect(component).toBeTruthy();
  });

  describe('Quando o metodo [BuscaProdutos] for chamado', () => {
    beforeEach(() => {
      spyOn(service, 'FindByName').and.returnValue(of(stub.mockDetalhesArray()));
      spyOn(component, 'BuscaDetalhe');
      component.BuscaProdutos('parace');
    });
    it('Então [BuscaDetalhe] deve ser chamado', () => {
      expect(component.BuscaDetalhe).toHaveBeenCalled();
    });
  });

  describe('Quando o metodo [BuscaDetalhe] for chamado', () => {
    beforeEach(() => {
      spyOn(service, 'FindByDetail').and.returnValue(of(stub.mockDetalhesArray()));
      spyOn(component, 'BuscaEstoque');
      spyOn(component, 'BuscaPreco');
      component.listObject = stub.mockBuscaItemArray();
      component.BuscaDetalhe();
    });
    it('Então o map deve ser executado', () => {
    });
    it('Então [BuscaEstoque] deve ser chamado', () => {
      expect(component.BuscaEstoque).toHaveBeenCalled();
    });
    it('Então [BuscaPreco] deve ser chamado', () => {
      expect(component.BuscaPreco).toHaveBeenCalled();
    });
  });

  describe('Quando o metodo [BuscaEstoque] for chamado', () => {
    beforeEach(() => {
      spyOn(service, 'FindByStock').and.returnValue(of(stub.mockEstoqueArray()));
      component.BuscaEstoque();
    });
    it('Então o for deve ser executado', () => {

    });
  });

  describe('Quando o metodo [BuscaPreco] for chamado', () => {
    beforeEach(() => {
      spyOn(service, 'FindByPrice').and.returnValue(of(stub.mockPrecoArray()));
      spyOn(component, 'AtualizandoLista');
      component.BuscaPreco();
    });
    it('Então o for deve ser executado', () => {

    });
    it('Então o [AtualizandoLista] deve ser chamado', () => {
      expect(component.AtualizandoLista).toHaveBeenCalled();
    });
  });


});
