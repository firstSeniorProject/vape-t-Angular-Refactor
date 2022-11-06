import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

public name = " <h1 >Katkoutou</h1>";
public message:string = "";


 constructor(private router: Router,){ }
 
 ngOnInit() {
  };



  title = 'Vape-It'

}
