import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { DescricaoprodutoComponent } from './componentes/descricaoproduto/descricaoproduto.component';
import { DetalhesprodutoComponent } from './componentes/detalhesproduto/detalhesproduto.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DescricaoprodutoComponent,
    DetalhesprodutoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
