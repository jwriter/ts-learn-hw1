import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {

  transform(value: number): string {
    const str = '' + value;
    if (str.length !== 10) {
      return '';
    }
    const res = str.slice(0, 3) + ' ' +
      str.slice(3, 6) + ' ' +
      str.slice(6, 8) + ' ' +
      str.slice(8);
    return `Tel. +${res}`;
  }

}
