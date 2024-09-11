import { EventEmitter, Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { logIn, signUp } from '../models/signup.model';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SellerService {
   isSellerLogIn = new BehaviorSubject<boolean>(false);
   isLoginError = new EventEmitter<boolean>(false );

  constructor(private http: HttpClient, public router: Router) { }

  userSignup(data: signUp){
    return this.http.post('http://localhost:3000/seller', data, {observe: 'response'}).subscribe((result) =>{
             this.isSellerLogIn.next(true);
             localStorage.setItem('seller', JSON.stringify(result.body))
             this.router.navigate(['/seller-home'])
    })
    }

    reloadSeller(){
      if(localStorage.getItem('seller')){
        this.isSellerLogIn.next(true);
        this.router.navigate(['/seller-home'])
      }
    }

    userLogin(data: logIn){
      console.log(data); 
      this.http.get(`http://localhost:3000/seller?email=${data.email}&password=${data.password}`,
        {observe: 'response'}).subscribe((result: any) =>{
          console.log(result)
          if(result && result.body && result.body.length ){
            console.log('user is ligin')
            localStorage.setItem('seller', JSON.stringify(result.body))
             this.router.navigate(['/seller-home'])
          }else
         this.isLoginError.emit(true);
        })   
    }
  }