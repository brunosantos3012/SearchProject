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
// tslint:disable-next-line: max-line-length
    return this.http.get(`${this.parameter.getValueOfPropertiesJson(Constantes.AUTOCOMPLETE_URL_API)}${name}&codigoFilial=101&maxResult=200&ordenarRentabilidade=true&ordenarPreco=false`);
  }

  BuscaDetalhe(detalhe: DetalhePost): Observable<any> {
    return this.http.post(`${this.parameter.getValueOfPropertiesJson(Constantes.DETALHE_URL_API)}`, detalhe);
  }

  BuscaEstoque(options: any): Observable<any> {
    return this.http.get(`${this.parameter.getValueOfPropertiesJson(Constantes.ESTOQUE_URL_API)}`, options);
  }

  BuscaPreco(options: any): Observable<any> {
    return this.http.get(`${this.parameter.getValueOfPropertiesJson(Constantes.CONSULTA_PRECO_API)}`, options);
  }



}
