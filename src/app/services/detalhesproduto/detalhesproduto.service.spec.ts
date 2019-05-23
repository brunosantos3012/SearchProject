import { TestBed } from '@angular/core/testing';

import { DetalhesprodutoService } from './detalhesproduto.service';

describe('DetalhesprodutoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DetalhesprodutoService = TestBed.get(DetalhesprodutoService);
    expect(service).toBeTruthy();
  });
});
