import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'idUrlDimension'
})
export class IdUrlDimensionPipe implements PipeTransform {

  transform(value: string,): string {
    var urlArray = Array.from(value);
    console.log(urlArray);
    var id: string;

    for(let i = urlArray.length-1; i > 0; i--){
      if(urlArray[i] === '/'){
        id = value.substr(i+1, urlArray.length-1);
        console.log(id)
        return id;
      }
    }

    return null;
  }

}
