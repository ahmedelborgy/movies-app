import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthotactionService } from './AuthotactionService';

export const authGuard: CanActivateFn = (route, state) => {
 
const auth=inject(AuthotactionService);
const _Router=inject(Router);


  if(auth.is_login.getValue()){
    
    return true;
  }
 else{
  _Router.navigate(['/login']);
  return false
 }
 
  
};

