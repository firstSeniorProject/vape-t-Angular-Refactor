import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  public loginForm !: FormGroup;
  // emailvalue!: string;
   user !: any;
 
  @Input() public parentData:any;
  @Output() public childEvent:any = new EventEmitter();

  constructor(private router: Router, 
            private http: HttpClient,
              private formBuilder:FormBuilder,){ }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      //name:[''],
     //user =  this.user,
      email:[''],
      password:[''],
    })
  }

  login(){
    console.log(this.loginForm.value)
    this.http.post<any>("http://localhost:3000/api/users/login", this.loginForm.value )
    .subscribe(res => {
     this.user = res;
        localStorage.setItem('userData',JSON.stringify(this.user));
        console.log(res)
        //alert("Login Up Success");
      this.loginForm.reset();
     this.router.navigate(['/']);

  }, err => {alert("Error: Something went wrong " + err.message)})
  }




 



  fireEvent(){
    this.childEvent.emit("Hey Hey");
  }

 
}


