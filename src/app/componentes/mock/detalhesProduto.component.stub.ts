import { Builder } from 'builder-pattern';
import { DetalheResponse } from 'src/app/model/detalheResponse.model';
import { BuscaItem } from 'src/app/model/buscaItem.model';
import { Estoque } from 'src/app/model/estoque.model';
import { Preco } from 'src/app/model/preco.model';

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
