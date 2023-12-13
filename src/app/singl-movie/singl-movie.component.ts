import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-singl-movie',
  templateUrl: './singl-movie.component.html',
  styleUrls: ['./singl-movie.component.css']
})
export class SinglMovieComponent {
constructor(private _auth:AuthService,private _ActivatedRoute:ActivatedRoute){}
result:any;
ngOnInit(): void {
this._auth.pag.getValue()
let movieId=this._ActivatedRoute.snapshot.params['x'];
// console.log(movieId);

  this._auth.getSingleMovies(movieId).subscribe({
    next:(respo)=> {
      console.log('-----ok');
      console.log(respo);
      this.result=respo;
    },
    error:(erro)=>{

    }
  })
}

}
