import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public menuType: string = 'defult';
  public sellerName : string = '';
   constructor(private router: Router){}

   ngOnInit(): void {
     this.router.events.subscribe((value: any) =>{
      if (value.url){
       if(localStorage.getItem('seller') && value.url.includes('seller')){
        this.menuType = 'seller';
        console.log('in seller area');
     if(localStorage.getItem('seller')){
       let storedSeller = localStorage.getItem('seller')
     }
      }else{
         this.menuType = 'defult' 
        console.log('out of seller')
       }
      }
     })
   }

   logOut(){
    localStorage.removeItem('seller')
    this.router.navigate(['/'])
   }
}
