import { TestBed } from '@angular/core/testing';
import { SearchAllService } from './searchall.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { DetalhesProdutoComponentStub as stub } from '../../componentes/detalhesproduto/detalhesProduto.component.stub';

describe('SearchAllService', () => {

  let serviceAll: SearchAllService;

  beforeEach(() => {
    const testBed = TestBed.configureTestingModule({
      providers: [SearchAllService, HttpClient, HttpHandler]
    });

    serviceAll = testBed.get(SearchAllService);

    describe('quando o request BuscaNome for chamado', () => {
      beforeEach(() => {
        spyOn(serviceAll, 'BuscaNome').and.callFake(() => { });
        expect(serviceAll.BuscaNome).toHaveBeenCalledWith(stub.mockDetalhes);
      });
      it('devera ser criado a service', () => {
        const service: SearchAllService = TestBed.get(SearchAllService);
        expect(service).toBeTruthy();
      });

      it('resposta do request BuscaNome', () => {
        spyOn(serviceAll, 'BuscaNome').and.callFake(() => { });
      });
    });
  });
});
