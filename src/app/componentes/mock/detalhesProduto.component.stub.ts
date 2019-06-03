import { Builder } from 'builder-pattern';
import { DetalheResponse } from 'src/app/model/detalheResponse.model';
import { BuscaItem } from 'src/app/model/buscaItem.model';
import { Estoque } from 'src/app/model/estoque.model';
import { Preco } from 'src/app/model/preco.model';
import { DetalhePost } from 'src/app/model/detalhePost.model';
import { ConsultaRegrasFiscais } from 'src/app/model/consultaRegrasFiscais.model';
import { Itens } from 'src/app/model/itens.model';
import { HttpParams } from '@angular/common/http';

export class DetalhesProdutoComponentStub {

    public static mockDetalhes(): DetalheResponse {
        return Builder<DetalheResponse>()
            .codigo(11)
            .estoque(1)
            .descricaoPai('testeeeeeee')
            .ean(7896714261515)
            .promocaoAssinatura(false)
            .nomenclatura('DIPIRONA SOD+CAFEINA 16 CP NEOQ GEN')
            .nomenclaturaDetalhada('PARACETAMOL 750MG 12 COMPRIMIDOS PRATI DONADUZZI GENÉRICO AVULSO')
            .principioAtivo('PARACETAMOL')
            .classeTerapeutica('ANALGESICOS+ANTITERMICOS')
            .situacaoItem('T')
            .build();
    }

    public static mockDetalhesArray(): DetalheResponse[] {
        return [Builder<DetalheResponse>()
            .codigo(11)
            .estoque(1)
            .descricaoPai('testeeeeeee')
            .ean(7896714261515)
            .promocaoAssinatura(false)
            .nomenclatura('DIPIRONA SOD+CAFEINA 16 CP NEOQ GEN')
            .nomenclaturaDetalhada('PARACETAMOL 750MG 12 COMPRIMIDOS PRATI DONADUZZI GENÉRICO AVULSO')
            .principioAtivo('PARACETAMOL')
            .classeTerapeutica('ANALGESICOS+ANTITERMICOS')
            .situacaoItem('T')
            .build()
        ];
    }

    public static mockBuscaItemArray(): BuscaItem[] {
        return [Builder<BuscaItem>()
            .codigoItem(11)
            .nomenclaturaVarejo(null)
            .nomeDetalhado(null)
            .possuiItemAVencer(null)
            .participaPbm(null)
            .permiteAdesao(null)
            .possuiKitAdesao(null)
            .exclusivoPanvel(null)
            .participaListaReferencial(null)
            .participaFarmaciaPopular(null)
            .build()
        ];
    }

    public static mockEstoqueArray(): Estoque[] {
        return [Builder<Estoque>()
            .estoqueLoja(111)
            .estoqueApoio(null)
            .reservaVirtual(null)
            .estoqueCd(null)
            .estoqueCdApoio(null)
            .filial(null)
            .codigoItem(11)
            .build()
        ];
    }

    public static mockPrecoArray(): Preco[] {
        return [Builder<Preco>()
            .codigoItem(11)
            .preco(null)
            .build()
        ];
    }

    public static mockInstanciaModal(): any {
        return {
            componentInstance: {
                item: ''
            }
        };
    }

    public static mockDetalhePost(): DetalhePost {
        return Builder<DetalhePost>()
            .codigo(11)
            .filial('101')
            .perfil(1)
            .itens(this.mockItensArray())
            .consultaRegrasFiscais(this.mockConsultaRegrasFiscais())
            .build()
    }

    public static mockConsultaRegrasFiscais(): ConsultaRegrasFiscais {
        return Builder<ConsultaRegrasFiscais>()
            .uf('RS')
            .pais('BR')
            .ufDestino('RS')
            .paisDestino('BR')
            .build()
    }

    public static mockItensArray(): Itens[] {
        return [
            Builder<Itens>()
                .codigo(11)
                .quantidade(10)
                .build()
        ]
    }

    public static mockHttpParamsEstoque(): any {
        let parametros = new HttpParams();
        parametros = parametros.append('itens', '101010');
        const options = { params: parametros };
        return options;
    }

    public static mockHttpParamsPreco(): any {
        let parametros = new HttpParams();
        parametros = parametros.append('item', '101010');
        const options = { params: parametros };
        return options;
    }

    public BuscaProdutos() { }
    public BuscaDetalhe() { }
    public BuscaEstoque() { }
    public BuscaPreco() { }
    public AtualizandoLista() { }
    public FindByName() { }
    public FindByDetail() { }
    public FindByStock() { }
    public FindByPrice() { }
    public OpenModal() { }

    public open() { }

}
