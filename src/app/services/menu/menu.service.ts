import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(protected http: HttpClient) { }

  SearchAll(name: string): Observable<any> {
    return this.http.get(`http://tst.grupodimedservices.com.br/item/v3/itens/base/autocomplete?nome=${name}&codigoFilial=101&maxResult=200&ordenarRentabilidade=true&ordenarPreco=false`);
  }
  
}
