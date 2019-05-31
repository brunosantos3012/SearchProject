import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ParametersService } from '../services/parameters/parameters.service';
import { Constantes } from './constantes';

@Injectable()

export class HttpsRequestInterceptor implements HttpInterceptor {

    constructor(protected parameter: ParametersService) { }

    intercept(
        request: HttpRequest<any>,
        next: HttpHandler,
    ): Observable<HttpEvent<any>> {
        const dupReq = request.clone({
            headers: request.headers.set('app-token', `${this.parameter.getValueOfPropertiesJson(Constantes.TOKEN_API)}`),
        });
        return next.handle(dupReq);
    }
}
