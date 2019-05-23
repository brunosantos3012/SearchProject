import { TestBed } from '@angular/core/testing';

import { DescricaoprodutoService } from './descricaoproduto.service';

describe('DescricaoprodutoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DescricaoprodutoService = TestBed.get(DescricaoprodutoService);
    expect(service).toBeTruthy();
  });
});
