import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

   public user !: any;
   public dayDate : any;
   public sentOn : any;

  constructor() { }

  ngOnInit(): void {
          // @ts-ignore
          this.user = JSON.parse(localStorage.getItem('userData'));
          console.log(this.user, "Profile");
          let registrationDay = new Date(this.user.createdAt);
          registrationDay.setDate(registrationDay.getDate());
          
  }

  calculateDiff(sentOn:any){

    let todayDate = new Date();
    let sentOnDate = new Date(sentOn);
    sentOnDate.setDate(sentOnDate.getDate());
    let differenceInTime = todayDate.getTime() - sentOnDate.getTime();
    // To calculate the no. of days between two dates
    let differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24)); 
    return differenceInDays;
}

}
