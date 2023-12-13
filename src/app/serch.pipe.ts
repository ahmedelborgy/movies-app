import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'serch'
})
// export class SerchPipe implements PipeTransform {

//   transform(arryMovie:any[],serchWord:string):any[] {
//     let filterArr:any[]=[];
//     console.log(arryMovie);
    
//      if(serchWord==undefined||serchWord=='')
//     return arryMovie;

//     for(var i=0;i<arryMovie.length;i++){
    
//      if(arryMovie[i].title
//      .includes(serchWord))
   
//       filterArr.push(arryMovie[i])
//     }
//     console.log(filterArr);
//     return filterArr;
    
//   }

// }

export class SerchPipe implements PipeTransform {

  transform(arryMovie:any[],serchWord:string):any[] {

if(serchWord==undefined||serchWord=='')
return arryMovie;

   return arryMovie.filter((elem:any)=>{
    return elem.title.toLowerCase().includes(serchWord.toLowerCase());

   })
   
  }

}
