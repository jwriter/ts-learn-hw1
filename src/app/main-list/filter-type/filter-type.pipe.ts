import { Pipe, PipeTransform } from '@angular/core';
import {Data} from '../../../data';

@Pipe({
  name: 'filterType'
})
export class FilterTypePipe implements PipeTransform {

  transform(value: Data[], filter: string): Data[] {
    if (!filter) {
      return value;
    }
    return value.filter(d => {
      return d.type === filter;
    });
  }

}
