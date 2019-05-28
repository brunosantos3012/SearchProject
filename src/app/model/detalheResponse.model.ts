import { Categoria } from './categoria.model';
import { Precos } from './precos.model';
import { Image } from './image.model';

export class DetalheResponse {
    public codigo: number;
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
    public dadosImagens: Array<Image>;
}