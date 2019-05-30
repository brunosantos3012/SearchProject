import { Builder } from 'builder-pattern';
import { DetalheResponse } from 'src/app/model/detalheResponse.model';

export class DetalhesProdutoComponentStub {

    // public static open() { };

    public static mockDetalhes(): DetalheResponse {
        return
        Builder<DetalheResponse>()
            .codigo(119196)
            .estoque(1)
            .descricaoPai("testeeeeeee")
            .ean(7896714261515)
            .promocaoAssinatura(false)
            .nomenclatura("DIPIRONA SOD+CAFEINA 16 CP NEOQ GEN")
            .nomenclaturaDetalhada("PARACETAMOL 750MG 12 COMPRIMIDOS PRATI DONADUZZI GENÉRICO AVULSO")
            .principioAtivo("PARACETAMOL")
            .classeTerapeutica("ANALGESICOS+ANTITERMICOS")
            .situacaoItem("T")
            .build()
    }


}