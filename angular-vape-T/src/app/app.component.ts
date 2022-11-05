import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
 user !: any;
public  isAvailable:any=true;
public name = " <h1 >Katkoutou</h1>";
public message:string = "";


 constructor(private router: Router,){ }
 
 ngOnInit() {
    this.isAvailable = true;
    // @ts-ignore
    this.user = JSON.parse(localStorage.getItem('userData'));
    console.log(this.user);
  };

  logOut(){
    localStorage.removeItem('userData');
    alert("You are logged out");
    this.isAvailable = false;
    this.router.navigate(['/login']);
  }

  logIn(){
  }
  
}
