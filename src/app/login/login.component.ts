import { Component } from '@angular/core';
 import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthotactionService } from '../AuthotactionService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
   loginMess:string='';
   is_load:boolean=false;
constructor(private _auth:AuthotactionService, private _Router:Router){
 
}
loginForm=new FormGroup({
  email:new FormControl(null,[

    Validators.required,
    Validators.email
  ]),
  password:new FormControl(null,[
    Validators.required,
    Validators.minLength(6),
    Validators.maxLength(16)
  ])
})
 
 

   singin(loginForm:any){
    this.is_load=true
    if(this.loginForm.valid)
    console.log(this.loginForm.value)

    this._auth.login(loginForm.value).subscribe(
      {
               
        next:(res)=>{
          this.is_load=false;
          // 1-to to moveis
          // 2-localStorge
          // 3-aklem auth to store data ,sheard data
        console.log("success");
        // console.log(res)
        // console.log(res.message);
        if(res.message=='success'){
          // display the message
          this.loginMess=res.message
        
      //  store toke in localstorage
  console.log(res.token)
    localStorage.setItem('userToken',res.token)
  //  check login
  localStorage.setItem('checkLogin','true');
    // shared data
    this._auth.sherTokenData();
    console.log(this._auth.userDataShare)
        // go to movies by Router navagite
         this._Router.navigate(['/movies']);
          // behover subject chang vlue
       this._auth.is_login.next(true);
       // logout
        }
       
    

        },
        error:(err)=>{
          this.is_load=false;
        console.log("error");
        console.log(err.error.message);
    
        this.loginMess=err.error.message;
       

        }
      }
    )
   }

   

    
    
  };

 

