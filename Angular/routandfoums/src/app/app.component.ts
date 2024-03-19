import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {

  login = new FormGroup({
      firstname: new FormControl("", [Validators.required,Validators.minLength(2)]),
      secname: new FormControl("", [Validators.required,Validators.minLength(2)]),
      password: new FormControl('', [Validators.minLength(8),Validators.required])
    });
  http: any;
    constuctor(){

    }
    getlogin(){
      this.http.get("")
      console.log(this.login)
    }

 }
