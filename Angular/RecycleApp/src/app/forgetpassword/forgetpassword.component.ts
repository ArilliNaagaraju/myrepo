import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-forgetpassword',
  standalone: true,
  imports: [FormsModule,NgIf],
  templateUrl: './forgetpassword.component.html',
  styleUrl: './forgetpassword.component.css'
})
export class ForgetpasswordComponent {
  email: string = '';

  constructor(private authService: ServiceService) {}

  sendCodefor() {
    this.authService.sendCode(this.email).subscribe(
      response => {
        console.log(response);
        if (response.success) {
          alert('Verification code sent to your email.');
        } else {
          alert('Invalid email address.');
        }
      },
      error => {
        console.error(error);
        alert('Error sending verification code.');
      }
    );
  }


}

