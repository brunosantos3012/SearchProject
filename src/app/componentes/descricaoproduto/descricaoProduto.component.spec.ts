import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ItemModule } from 'src/app/modules/item.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { DescricaoProdutoComponent } from './descricaoProduto.component';
import { DetalhesProdutoComponentStub as stub } from '../mock/detalhesProduto.component.stub';

describe('DescricaoprodutoComponent', () => {
  let component: DescricaoProdutoComponent;
  let fixture: ComponentFixture<DescricaoProdutoComponent>;
  let modalService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [NgbModal],
      imports: [ItemModule, AppRoutingModule]
    }).compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(DescricaoProdutoComponent);
        component = fixture.componentInstance;
        modalService = TestBed.get(NgbModal);
        fixture.detectChanges();
      });

  }));

  describe('Quando executar modal', () => {
    beforeEach(() => {
      component.OpenModal(stub.mockDetalhes());
    });
    it('devera abrir modal', () => {
      expect(component).toBeTruthy();
    });

    it('verificando a abertura da modal', () => {
      spyOn(modalService, 'open').and.callFake(() => { });
      // expect(modalService.open).toHaveBeenCalledWith(stub.mockDetalhes);
    });
  });

});
