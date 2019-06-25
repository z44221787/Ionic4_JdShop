import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringSplit'
})
export class StringSplitPipe implements PipeTransform {

  transform(value: string, Maxlength: number = 5): string {
    if (value.length > Maxlength) {
      return value.substring(0, Maxlength - 1 ) + '......';
    } else {
       return value;
    }
  }

}
