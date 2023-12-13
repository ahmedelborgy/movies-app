import { Component } from '@angular/core';
import { AuthotactionService } from '../AuthotactionService';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})




export class NavbarComponent  {
 
nav_login:any=false;



constructor(private aut: AuthotactionService ,
  private _Router:Router){
// this.aut.is_login.subscribe({
//   next:()=>{
//     this.nav_login=this.aut.is_login.getValue();
//   }
// })
}
ngOnInit(): void {
  
  console.log(this.nav_login);
 
  this.aut.is_login.subscribe({
    next:()=>{
   
    this.nav_login = this.aut.is_login.getValue();
   
   
    
    }
  })
}

goOut():void{
  this.aut.logOut();
}

// logOut

 logOut2():void{
  // document.querySelector('.logOut')?.classList.add('d-flex');


  document.querySelector('.logOut')?.classList.replace('d-none','d-flex');

setTimeout(
  ()=>{
    this.aut.is_login.next(false);
    this._Router.navigate(['/login']);
    localStorage.removeItem('userToken');
    localStorage.removeItem('checkLogin');
   
  document.querySelector('.logOut')?.classList.replace('d-flex','d-none');

  }
,5000);


// this.aut.is_login.next(false);
// this._Router.navigate(['/login']);
// localStorage.removeItem('userToken');
 }
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  



}
