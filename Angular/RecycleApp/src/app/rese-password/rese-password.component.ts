import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-rese-password',
  standalone: true,
  imports: [FormsModule,NgIf],
  templateUrl: './rese-password.component.html',
  styleUrl: './rese-password.component.css'
})
export class ResePasswordComponent {
  email: string = '';
  verificationCode: string = '';
  password: string = '';
  confirmPassword: string = '';
  isVerificationStep: boolean = false;
  isResetStep: boolean = false;

  constructor(private authService: ServiceService) {}
  resetPassword() {
    if (this.password === this.confirmPassword) {
      this.authService.resetPassword(this.email, this.password).subscribe(
        response => {
          console.log(response);
          alert('Password reset successfully');
        },
        error => {
          console.error(error);
        }
      );
    } else {
      console.error('Passwords do not match');
    }
  }
  sendCode() {
  this.authService.sendCode(this.email).subscribe(
    response => {
      console.log(response);
      this.isVerificationStep = true;
      this.isResetStep = false;
    },
    error => {
      console.error(error);
      if (error.status === 404) {
        alert('Email not found');
      } else {
        alert('An error occurred while sending the code');
      }
    }
  );
}

}
