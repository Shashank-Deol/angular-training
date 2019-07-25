import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { AngularDropdownModule } from 'angular-dropdown';
 
@NgModule({
  imports: [AngularDropdownModule]
})
export class AppModule {}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular js';
  age = '22';
  message = 'How are you';
  myColor = 'red';
  myUrl='www.google.com';

  shouldDisplay=false;
  

  show(){
    this.shouldDisplay = !this.shouldDisplay;
  }
  myList=["I","am","Shashank"];

  //cname="Companies";
  cars=[
    {
      name:"Fiat",
      website:"www.google.com"
  },{
    name:"Audi",
    website:"www.google.com",
  },{
    name:"Mercedes",
    website:"www.google.com"
  },{
    name:"Jeep",
    website:"www.google.com"
  }
  ];
}
