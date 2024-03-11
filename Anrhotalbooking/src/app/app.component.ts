import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { routes } from './app.routes';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterModule,ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
    login=new FormGroup({
    Name:new FormControl('',[Validators.required,Validators.minLength(4)]),
    password:new FormControl('',[Validators.required,Validators.minLength(6)]),
    confPassword:new FormControl('',[Validators.required,Validators.minLength(6)])
  });

  }
