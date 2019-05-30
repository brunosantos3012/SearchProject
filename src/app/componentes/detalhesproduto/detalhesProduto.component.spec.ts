import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesProdutoComponent } from './detalhesProduto.component';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

describe('DetalhesprodutoComponent', () => {
  let component: DetalhesProdutoComponent;
  let fixture: ComponentFixture<DetalhesProdutoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalhesProdutoComponent ],
      providers: [ NgbActiveModal ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhesProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
