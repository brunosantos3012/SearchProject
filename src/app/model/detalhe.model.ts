import { Itens } from './itens.model';
import { ConsultaRegrasFiscais } from './consultaregrasfiscais.model';

export class Detalhe{
    public filial: string;
    public perfil: number;
    public itens: Array<Itens> = new Array();
    public consultaRegrasFiscais: ConsultaRegrasFiscais;
}