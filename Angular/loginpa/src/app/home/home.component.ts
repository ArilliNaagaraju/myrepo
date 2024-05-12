import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  name: string="";
  password: string="";

constructor(private http: HttpClient) {}

login() {
  this.http.post<any>('http://localhost:3006/login', { name: this.name, password: this.password })
    .subscribe(response => {
      if (response.success) {
      } else {
      }
      (error: HttpErrorResponse) => {
        console.error('An error occurred:', error.error);
      }
    });
}
}
