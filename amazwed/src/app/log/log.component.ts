import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-log',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './log.component.html',
  styleUrl: './log.component.css'
})
export class LogComponent {
  [x: string]: any | string;
  signandlogin: FormGroup;

  constructor(private fb: FormBuilder) {
    this.signandlogin = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(18)]],
      phoneNumber: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', [Validators.required, this['confirmPassword.Validator']]], // Custom validator for password confirmation
    });
  }

  }
