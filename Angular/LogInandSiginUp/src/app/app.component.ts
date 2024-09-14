import { Component, Output, output } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { ServicesService } from './services.service';
import { NgIf } from '@angular/common';
import { ChildComponent } from "./child/child.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, FormsModule, NgIf, ChildComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  message: string = 'Hello from Parent!';
  title = 'LogInandSiginUp';
  errorMessage: string | null = null;
  user = {
    name: '',
    email: '',
    password: '',
    confPassword: ''
  };
  constructor(private Service: ServicesService){

  }
  onSubmit(user:any) {
      this.Service.registerUser(this.user).subscribe(
        response => {
          console.log('User registered:', response);
          this.errorMessage = null;
          user.reset();
        },
        error => {
          console.error('Error:', error);
        }
      );
   
  }

}
