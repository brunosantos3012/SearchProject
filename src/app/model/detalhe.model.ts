import { Itens } from './itens.model';
import { ConsultaRegrasFiscais } from './consultaRegrasFiscais.model';

export class Detalhe{
    public filial = "101";
    public perfil = 1;
    public itens: Array<Itens> = new Array();
    public consultaRegrasFiscais: ConsultaRegrasFiscais;
}