import { Injectable } from '@angular/core';
import properties from '../../../../properties.json';

@Injectable({
  providedIn: 'root'
})
export class ParametersService {

  constructor() { }

  getValueOfPropertiesJson(value: string): any {
    return properties[value];
  }
}
