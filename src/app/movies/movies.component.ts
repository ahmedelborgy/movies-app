import { Component,OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})

export class MoviesComponent implements OnInit {
[x: string]: any;
n=1;
  moviesResult:any;
  resultPagem:any;
  x=0;
  totalPag:any;
 nextPag:number=this._AuthService.pag.getValue();
 serchWord:string='';
  constructor(private _AuthService:AuthService){}
  // ==========pagination===========
getPag(eve:any){
console.log(eve.target.innerHTML);

this.mainGetMovies(eve.target.innerHTML);
this.nextPag=eve.target.innerHTML;
}
getNextPag(){
  if(this.nextPag>this.totalPag){
    this.nextPag=1;
    this.resultPagem=1;
  }
  console.log(this.nextPag)
  this.nextPag++;
  
let list=document.querySelectorAll('.pagintion-link');
console.log(list)

for(let i=0;i<list.length;i++){
  console.log(list[i].innerHTML);
list[i].innerHTML=`${this.resultPagem+(i+1)}`;
  console.log('----------');
}




  this.mainGetMovies(this.nextPag);
  
}

getPrivesPag(){
  let list=document.querySelectorAll('.pagintion-link');
  this.nextPag--;
  
    this.mainGetMovies(this.nextPag);


   if(this.nextPag <= 0 ){
   
   this.resultPagem=this.totalPag;
   this.nextPag=this.totalPag;
   this.resultPagem=this.totalPag;
  //  alert('llllll'+this.nextPag)
   }

   for(let i=0;i<list.length;i++){
  console.log(list[i].innerHTML);
   let p= this.resultPagem-(i+1);
   if(p<=0){
    // alert(p)
    p=this.totalPag;
   }
  list[i].innerHTML=`${p}`;
   
    console.log('----------');
  }
  

  
   
  }
  
  



  ngOnInit(): void {
  this.mainGetMovies(this.nextPag);
 }

mainGetMovies(pag:number){
  document.querySelector('.logOut')?.classList.add('d-flex')

  // alert('===='+this.nextPag)
  this._AuthService.getMovies(pag).subscribe({
    next:(res)=>{
      document.querySelector('.logOut')?.classList.add('d-none')

      this.moviesResult=res.results;
        console.log(res)
     this.totalPag=res.total_pages;
    this.resultPagem=res.page;
    this._AuthService.pag.next(this.resultPagem);
}
        ,
        error:(err)=>{
          console.log('Error');
          console.log(err.message);
        }
   
  
      })
}







  }