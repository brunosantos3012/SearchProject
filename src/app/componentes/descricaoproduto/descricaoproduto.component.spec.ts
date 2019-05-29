import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';

import { DescricaoprodutoComponent } from './descricaoproduto.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DetalhesprodutoComponent } from '../detalhesproduto/detalhesproduto.component';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';

describe('DescricaoprodutoComponent', () => {
  let component: DescricaoprodutoComponent;
  let fixture: ComponentFixture<DescricaoprodutoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DescricaoprodutoComponent, DetalhesprodutoComponent]
    }).overrideModule(BrowserDynamicTestingModule, {
      set: {
        entryComponents: [DetalhesprodutoComponent]
      }
    })
      .compileComponents();
    fixture = TestBed.createComponent(DescricaoprodutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Verificando a abertura da modal', fakeAsync(() => {
    spyOn(component, 'OpenModal').and.callThrough();
  }));

});
