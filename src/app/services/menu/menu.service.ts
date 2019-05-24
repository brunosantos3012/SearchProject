import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ParametersService } from '../parameters/parameters.service';
import { Constantes } from 'src/app/contantes/constantes';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(protected http: HttpClient, protected parameter: ParametersService) { }

  SearchAll(name: string): Observable<any> {
    return this.http.get(`${this.parameter.getValueByPropertiesJson(Constantes.autocomplete_url_api)}${name}&codigoFilial=101&maxResult=200&ordenarRentabilidade=true&ordenarPreco=false`);
  }
  
}
