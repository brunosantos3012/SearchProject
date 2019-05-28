import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesprodutoComponent } from './detalhesproduto.component';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

describe('DetalhesprodutoComponent', () => {
  let component: DetalhesprodutoComponent;
  let fixture: ComponentFixture<DetalhesprodutoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalhesprodutoComponent ],
      providers: [ NgbActiveModal ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhesprodutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
