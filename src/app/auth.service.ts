
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private httpClient:HttpClient) { 
}


x:any;
pag=new BehaviorSubject(1);

getMovies(pag:number):Observable<any>{
  return this.httpClient.get
  (`https://api.themoviedb.org/3/movie/now_playing?api_key=0b62e2d3181f2f5e30698542ec64a47e&page=${pag}`);
    }


getIdMain(mainId:number):number{

this.x=mainId;
return mainId;
}







getSingleMovies(id:number):Observable<any>{
//   return this.httpClient
//   .get(`https://api.themoviedb.org/3/movie/${this.x}?api_key=0b62e2d3181f2f5e30698542ec64a47e
// &language=en-US` )

// }

return this.httpClient
.get(`https://api.themoviedb.org/3/movie/${id}?api_key=0b62e2d3181f2f5e30698542ec64a47e&language=en-US` )

}

}


// serch api
// https://api.themoviedb.org/3/search/movie?
// api_key=0b62e2d3181f2f5e30698542ec64a47e&page
// &language=en-US&page=1&include_adult=false&query=harry

// Home

// https://api.themoviedb.org/3/trending/movie/week?api_key=0b62e2d3181f2f5e30698542ec64a47e
// https://api.themoviedb.org/3/trending/tv/week?api_key=0b62e2d3181f2f5e30698542ec64a47e