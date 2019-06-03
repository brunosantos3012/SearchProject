import { TestBed } from '@angular/core/testing';

import { ParametersService } from './parameters.service';
import { DetalhesProdutoComponentStub } from 'src/app/componentes/mock/detalhesProduto.component.stub';

describe('ParametersService', () => {

  let service: ParametersService;
  let stub: DetalhesProdutoComponentStub;

  beforeEach(() => {
    const testBed = TestBed.configureTestingModule({
      providers: [ParametersService, DetalhesProdutoComponentStub]
    });
    service = testBed.get(ParametersService);
    stub = testBed.get(DetalhesProdutoComponentStub);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('Quando o metodo [getValueOfPropertiesJson] for chamado', () => {
    let resultado: string;
    beforeEach(() => {
      resultado = service.getValueOfPropertiesJson('detalhe_url');
    });
    it('Então [getValueOfPropertiesJson] deve ser chamado com valor verdadeiro', () => {
      expect(resultado).toEqual('http://api-int.grupodimedservices.com.br/tst/mostruario/v3/itens/detalhe');
    });
  });
});
