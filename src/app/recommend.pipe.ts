import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'recommend'
})
export class RecommendPipe implements PipeTransform {

  transform(p1:number,p2:string):string{
    return p2+(p1+1);
  }

}
