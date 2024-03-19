import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dirandpipes';
  isLogIn : boolean = true;
   isLogOut : boolean = false; 

   list = [1,2,3,4,5];

   logInName = 'admin'; 

   users: User[] = [ 
    { 
       "userId": 1, 
       "userName": 'User1' 
    }, 
    { 
       "userId": 2, 
       "userName": 'User2' 
    }, 
 ]; 

 presentDate = new Date(); 
 price : number = 20000;
 amount=0.2365;
}
