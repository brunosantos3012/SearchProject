import { Itens } from './itens.model';
import { ConsultaRegrasFiscais } from './consultaRegrasFiscais.model';

export class Detalhe{
    public filial: string;
    public perfil: number;
    public itens: Array<Itens> = new Array();
    public consultaRegrasFiscais: ConsultaRegrasFiscais;
}