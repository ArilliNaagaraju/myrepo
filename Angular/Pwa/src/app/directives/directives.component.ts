import { NgClass, NgFor, NgIf, NgStyle, NgSwitch, NgSwitchCase } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../user';
import { CustomDirectiveDirective } from '../custom-directive.directive';

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [FormsModule, NgIf, NgFor, NgSwitch, NgSwitchCase, NgClass,NgStyle,CustomDirectiveDirective],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {
  MyDirective:boolean=true;
  islogon:boolean=false;
  islogout:boolean=true;
  list=[1,2,3,4,5];
  logInName="admin";
  
  users: User[] = [ 
    { 
       "UserId": 1, 
       "UserName": 'User1' 
    }, 
    { 
       "UserId": 2, 
       "UserName": 'User2' 
    }, 
 ]; 
//  user:any={
//   userName:"",
//   Password:'',
//   confirmPassword:''
//  }
user: any = {
  username: '',
  password: '',
  confirmPassword: ''
}
showInfo(e: Event) {
  e.preventDefault();
  let info: string = '';
  info += 'Username = ' + this.user.username;
  info += '\nPassword = ' + this.user.password;
  info += '\nConfirm password = ' + this.user.confirmPassword;
  alert(info)
}

}
