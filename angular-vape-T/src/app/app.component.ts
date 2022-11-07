import { Component, OnInit } from '@angular/core';
import { Cart } from './models/cart.model';
import { CartService } from './services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// export class AppComponent implements OnInit {
//   cart: Cart = { items:[] };
//   constructor( private CartService: CartService
//     ){ }

//     ngOnInit(){
//       this.CartService.cart.subscribe((_cart) => {
//         this.cart=_cart;
//       })

//     }


export class AppComponent implements OnInit {
cart:Cart={items:[]};
 user !: any;
 isAvailable !: any;


 constructor(private router: Router,private CartService: CartService){ }
 
 ngOnInit() {
    this.isAvailable = true;
    // @ts-ignore
    this.user = JSON.parse(localStorage.getItem('userData'));
    console.log(this.user);

    
  };

  logOut(){
    this.isAvailable = false;
    localStorage.removeItem('userData');
    alert("You are logged out");
  }
  logIn(){
    
    this.router.navigate(['/login']);
   
  }
  cartSer(){
    this.CartService.cart.subscribe((_cart) => {
      this.cart=_cart;
    })
  }

  title = 'Vape-It'

}

