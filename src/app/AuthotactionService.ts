import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { LoginData } from './login-data';
import { jwtDecode } from 'jwt-decode';
import { Router } from '@angular/router';

export interface RegisterInterFc {
   
  email:string,
  name:string,
  phone:string,
  password:string,
  repassword:string


}

@Injectable({
  providedIn: 'root'
})
export class AuthotactionService {
  is_login=new BehaviorSubject(false);
 
constructor(private _HttpClient:HttpClient ,
  private _Router:Router){
    if(localStorage.getItem('userToken') !=null){
      this.is_login.next(true)
    }
    else{
      this.is_login.next(false);
    }
}

userDataShare:string=' ';
// is_login:boolean=false;

basUrl:string='https://ecommerce.routemisr.com';



  
// sher user data token
 sherTokenData():void{
let encodecToke=localStorage.getItem('userToken');
console.log(encodecToke)


this.userDataShare=jwtDecode(JSON.stringify(encodecToke));
console.log(this.userDataShare);
}

sendRegister(user:RegisterInterFc):Observable<any>{
 return this._HttpClient.post(this.basUrl+'/api/v1/auth/signup',user);
}
login(userLogin:LoginData):Observable<any>{
return this._HttpClient.post(this.basUrl + '/api/v1/auth/signin',userLogin);
}
//--------- logOut---------------
logOut():void{
this._Router.navigate(['/login']);

this.is_login.next(false);

}
}
