import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { signUp } from 'src/app/models/signup.model';
import { SellerService } from 'src/app/Services/seller.service';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit {
   public showLogin: boolean = false;
   public authError: string = '';
 constructor (private sellerservice: SellerService, private router: Router){

 }

 ngOnInit(): void {
   this.sellerservice.reloadSeller();
 }

  signup(data: signUp):void{
    this.sellerservice.userSignup(data)
  }

  login(data: any){
   this.sellerservice.userLogin(data);
   this.sellerservice.isLoginError.subscribe((isError)=>{
    if(isError){
      this.authError = 'email or password not correct'
    }
   })
  }

  openLogin(){
   this.showLogin = true;
  }

  openSignup(){
    this.showLogin = false;
  }
}
