import { NgModule } from '@angular/core';
import { MenuComponent } from '../componentes/menu/menu.component';
import { SearchAllService } from '../services/searchAll/searchall.service';
import { ParametersService } from '../services/parameters/parameters.service';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DetalhesProdutoComponent } from '../componentes/detalhesproduto/detalhesProduto.component';
import { DescricaoProdutoComponent } from '../componentes/descricaoproduto/descricaoProduto.component';

@NgModule({
    declarations: [
        MenuComponent,
        DetalhesProdutoComponent,
        DescricaoProdutoComponent
    ],
    imports: [
        CommonModule,
        NgbModule
    ],
    providers: [
        SearchAllService,
        ParametersService
    ],
    entryComponents: [ DetalhesProdutoComponent ]
})

export class ItemModule { }
