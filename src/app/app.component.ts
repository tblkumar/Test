import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 4 Project..!!';
  todaydate = new Date();
  jsonval = {name:'Sravan', age:'31',address:{a1:'Kakinada',a2:'Hyderabad'}};
  months =["Janauary","February","March","April","May","June","July","August","September",
            "October","November","December"];
  isavailable =false;
  myClickFunction(event){

    alert("Button Clicked...!!");
    console.log(event);
  }

  changeMonths(event){

    alert("Changed Month from dropdown..!");
    console.log(event);
  }
}
