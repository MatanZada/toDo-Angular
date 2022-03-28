import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterSearch',
})
export class FilterSearchPipe implements PipeTransform {
  transform(value: any, filterBoolean: string) {
    if (value.length === 0) {
      return value;
    }
    const toDos = [];
    for (const toDo of value) {
      if (toDo['name'] === FilterSearchPipe) {
        toDos.push(toDo);
      }
    }
    return toDos;
  }
}
