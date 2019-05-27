import { Preco } from './preco.model';
import { Categoria } from './categoria.model';
import { Precos } from './precos.model';

export class DetalheResponse {
    public codigoItem: number;
    public estoque?: number;
    public preco?: Precos;
    public descricaoPai: string;
    public ean: number;
    public promocaoAssinatura: string;
    public nomenclatura: string;
    public nomenclaturaDetalhada: string;
    public principioAtivo: string;
    public classeTerapeutica: string;
    public situacaoItem: string;
    public advertencias: Array<string>;
    public categorias: Array<Categoria>;
}