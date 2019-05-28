import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { DescricaoprodutoComponent } from './componentes/descricaoproduto/descricaoproduto.component';
import { DetalhesprodutoComponent } from './componentes/detalhesproduto/detalhesproduto.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Interceptor } from './modules/interceptor.module';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DescricaoprodutoComponent,
    DetalhesprodutoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    Interceptor,
    NgbModule
  ],
  providers: [NgbActiveModal],
  bootstrap: [AppComponent],
  entryComponents: [
    DetalhesprodutoComponent
  ]
})
export class AppModule { }
