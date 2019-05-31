import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ItemModule } from 'src/app/modules/item.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { DescricaoProdutoComponent } from './descricaoProduto.component';
import { DetalhesProdutoComponentStub as stub } from '../mock/detalhesProduto.component.stub';
import { of } from 'rxjs';
import { DetalhesProdutoComponent } from '../detalhesproduto/detalhesProduto.component';

describe('DescricaoprodutoComponent', () => {
  let component: DescricaoProdutoComponent;
  let fixture: ComponentFixture<DescricaoProdutoComponent>;
  let service: NgbModal;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [ {provide: NgbModal, useClass: stub} ],
      imports: [ItemModule, AppRoutingModule]
    }).compileComponents()
      .then(() => {
        service = TestBed.get(NgbModal);
      });

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescricaoProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('devera abrir modal', () => {
    expect(component).toBeTruthy();
  });

  // describe('Quando executar modal', () => {
  //   beforeEach(() => {
  //     component.OpenModal(stub.mockDetalhes());
  //   });
  //   it('devera abrir modal', () => {
  //     expect(component).toBeTruthy();
  //   });

  //   it('verificando a abertura da modal', () => {
  //     spyOn(modalService, 'open');
  //     expect(modalService.open).toHaveBeenCalled();
  //   });
  // });

  describe('Quando executar a abertura da modal', () => {
    beforeEach(() => {
      spyOn(service, 'open').and.returnValue(stub.mockInstanciaModal());
      component.OpenModal(stub.mockDetalhes());
    });
    it('Então deve ser aberto a modal', () => {
      expect(service.open).toHaveBeenCalled();
    });
  });

});
