import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ParametersService } from '../parameters/parameters.service';
import { Constantes } from 'src/app/contantes/constantes';
import { DetalhePost } from 'src/app/model/detalhePost.model';

@Injectable({
  providedIn: 'root'
})
export class SearchAllService {

  constructor(protected http: HttpClient, protected parameter: ParametersService) { }

  BuscaNome(name: string): Observable<any> {
    return this.http.get(`${this.parameter.getValueByPropertiesJson(Constantes.autocomplete_url_api)}${name}&codigoFilial=101&maxResult=200&ordenarRentabilidade=true&ordenarPreco=false`);
  }

  BuscaEstoque(options: any): Observable<any> {
    return this.http.get(`${this.parameter.getValueByPropertiesJson(Constantes.estoque_url_api)}`, options);
  }

  BuscaPreco(options: any): Observable<any> {
    return this.http.get(`${this.parameter.getValueByPropertiesJson(Constantes.consulta_preco_url_api)}`, options);
  }

  BuscaDetalhe(detalhe: DetalhePost): Observable<any> {
    return this.http.post(`${this.parameter.getValueByPropertiesJson(Constantes.detalhe_url_api)}`, detalhe);
  }

}
