import { TestBed } from '@angular/core/testing';
import { SearchAllService } from './searchall.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { DetalhesProdutoComponentStub as stub, DetalhesProdutoComponentStub } from '../../componentes/mock/detalhesProduto.component.stub';
import { of } from 'rxjs';

describe('SearchAllService', () => {

    let service: SearchAllService;
    let stub: DetalhesProdutoComponentStub;

    beforeEach(() => {
        const testBed = TestBed.configureTestingModule({
            providers: [HttpClient, HttpHandler, SearchAllService, DetalhesProdutoComponentStub]
        });
        service = testBed.get(SearchAllService);
        stub = testBed.get(DetalhesProdutoComponentStub);
    });

    describe('Quando o metodo HTTP [FindByName] for chamado', () => {
        beforeEach(() => {
            spyOn(service, 'FindByName').and.returnValue(of('parace'));
            service.FindByName('parace');
        });
        it('Então [FindByName] deve ser chamado', () => {
            expect(service.FindByName).toHaveBeenCalled();
        });
    });
});
