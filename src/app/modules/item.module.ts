import { NgModule } from '@angular/core';
import { MenuComponent } from '../componentes/menu/menu.component';
import { DetalhesprodutoComponent } from '../componentes/detalhesproduto/detalhesproduto.component';
import { DescricaoprodutoComponent } from '../componentes/descricaoproduto/descricaoproduto.component';
import { SearchAllService } from '../services/searchAll/searchall.service';
import { ParametersService } from '../services/parameters/parameters.service';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    declarations: [
        MenuComponent,
        DetalhesprodutoComponent,
        DescricaoprodutoComponent
    ],
    imports: [
        CommonModule,
        NgbModule
    ],
    providers: [
        SearchAllService,
        ParametersService
    ],
    entryComponents: [ DetalhesprodutoComponent ]
})

export class ItemModule {}
