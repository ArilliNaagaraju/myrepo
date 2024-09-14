import { NgClass, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SiginAndSigUpService } from '../sigin-and-sig-up.service';

@Component({
  selector: 'app-sigin-sig-up',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,NgIf,NgClass],
  templateUrl: './sigin-sig-up.component.html',
  styleUrl: './sigin-sig-up.component.css'
})
export class SiginSigUpComponent {

  signupForm = {
    username: '',
    gmail: '',
    password: '',
    theaterName: '',
    movieName: '',
    moviehall: '',
    area: ''
  };

  signinForm = {
    gmail: '',
    password: ''
  };

  isSignUp = true;

  constructor(private authService: SiginAndSigUpService) {}

  // Signup logic
  onSignup() {
    this.authService.signup(this.signupForm).subscribe(response => {
      console.log('Signup successful', response);
    }, error => {
      console.log('Signup failed', error);
    });
  }

  // Signin logic
  onSignin() {
    this.authService.signin(this.signinForm).subscribe(response => {
      console.log('Signin successful', response);
    }, error => {
      console.log('Signin failed', error);
    });
  }

  // Toggle between Sign Up and Sign In forms
  showSignUp() {
    this.isSignUp = true;
  }

  showSignIn() {
    this.isSignUp = false;
  }

}
