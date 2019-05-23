import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescricaoprodutoComponent } from './descricaoproduto.component';

describe('DescricaoprodutoComponent', () => {
  let component: DescricaoprodutoComponent;
  let fixture: ComponentFixture<DescricaoprodutoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescricaoprodutoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescricaoprodutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
