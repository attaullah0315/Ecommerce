import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';


export const sellerAuthGuard: CanActivateFn = (route, state) => {
   
  if (localStorage.getItem('seller')) {
    
    return true;
  } else {
    return false;

  }
};

