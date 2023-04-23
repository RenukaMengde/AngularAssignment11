import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myrev'
})
export class MyrevPipe implements PipeTransform {

  transform(value: string): string {
    let str : string = "";

    for (let i = value.length - 1; i >= 0 ; i--)
    {
      str += value[i];
    }
    console.log(str);
    return str;
  }

}
