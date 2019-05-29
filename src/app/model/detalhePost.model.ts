import { Itens } from './itens.model';
import { ConsultaRegrasFiscais } from './consultaRegrasFiscais.model';

export class DetalhePost {
    public codigo: number;
    public filial: string;
    public perfil: number;
    public itens: Array<Itens>;
    public consultaRegrasFiscais: ConsultaRegrasFiscais;
}
