import { Injectable } from '@angular/core';
import properties from '../../../../properties.json';

@Injectable({
  providedIn: 'root'
})
export class ParametersService {

  constructor() { }

  getValueByPropertiesJson(value: string): any {
    return properties[value];
  }
}
