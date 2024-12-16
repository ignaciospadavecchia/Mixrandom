import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'distancias'
})
export class DistanciasPipe implements PipeTransform {

  transform(metros:number): number {
    return metros/1000;
  }
}
