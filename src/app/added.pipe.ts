import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'added'
})
export class AddedPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    value = value + 50;
    return value;
  }

}
