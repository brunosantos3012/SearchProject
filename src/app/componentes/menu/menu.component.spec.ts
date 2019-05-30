import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuComponent } from './menu.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { ItemModule } from 'src/app/modules/item.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { SearchAllService } from 'src/app/services/searchAll/searchall.service';
import { DetalhesProdutoComponentStub as stub } from '../detalhesproduto/detalhesProduto.component.stub';

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
      providers: [HttpClient, HttpHandler]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('devera ser criado', () => {
    expect(component).toBeTruthy();
  });

  xdescribe('Response do BuscaProdutos', () => {
    beforeEach(() => {
      component.BuscaProdutos('parace');
    });
    it('Resultado c', () => {
      // spyOn(, '')
    });

  });

});
