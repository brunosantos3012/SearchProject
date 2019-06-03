import { TestBed } from '@angular/core/testing';
import { SearchAllService } from './searchall.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { DetalhesProdutoComponentStub as stub, DetalhesProdutoComponentStub } from '../../componentes/mock/detalhesProduto.component.stub';

describe('SearchAllService', () => {

    let service: SearchAllService;
    let httpClient: HttpClient;

    beforeEach(() => {
        const testBed = TestBed.configureTestingModule({
            providers: [HttpClient, HttpHandler, SearchAllService, DetalhesProdutoComponentStub]
        });
        service = testBed.get(SearchAllService);
        httpClient = testBed.get(HttpClient);
    });

    describe('Quando o metodo HTTP [FindByName] for chamado', () => {
        beforeEach(() => {
            spyOn(httpClient, 'get');
            service.FindByName('paracetamol');
        });
        it('Então [FindByName] deve ser chamado', () => {
            expect(httpClient.get).toHaveBeenCalled();
        });
    });

    describe('Quando o metodo HTTP [FindByDetail] for chamado', () => {
        beforeEach(() => {
            spyOn(httpClient, 'post');
            service.FindByDetail(stub.mockDetalhePost());
        });
        it('Então [FindByDetail] deve ser chamado', () => {
            expect(httpClient.post).toHaveBeenCalled();
        });
    });

    describe('Quando o metodo HTTP [FindByStock] for chamado', () => {
        beforeEach(() => {
            spyOn(httpClient, 'get');
            service.FindByStock(stub.mockHttpParamsEstoque());
        });
        it('Então [FindByStock] deve ser chamado', () => {
            expect(httpClient.get).toHaveBeenCalled();
        });
    });

    describe('Quando o metodo HTTP [FindByPrice] for chamado', () => {
        beforeEach(() => {
            spyOn(httpClient, 'get');
            service.FindByPrice(stub.mockHttpParamsPreco());
        });
        it('Então [FindByPrice] deve ser chamado', () => {
            expect(httpClient.get).toHaveBeenCalled();
        });
    });

});
