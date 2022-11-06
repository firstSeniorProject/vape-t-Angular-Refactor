import { Component, OnInit, } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from './models/cart.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
cart:Cart={items:[]};
 user !: any;
 isAvailable !: any;

 constructor(private router: Router, 
  ){ }
 
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

  title = 'Vape-It'

}
