import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sigup',
  standalone: true,
  imports: [FormsModule,HttpClientModule],
  templateUrl: './sigup.component.html',
  styleUrl: './sigup.component.css'
})
export class SigupComponent {
  fullName: string = '';
  email: string = '';
  password: string = '';

  constructor(private http: HttpClient) {}

  registerUser() {
    const userData = {
      fullName: this.fullName,
      email: this.email,
      password: this.password
    };

    this.http.post<any>('http://localhost:3010/signup', userData)
      .subscribe(response => {
        console.log(response);
        // Handle response as needed
      });
  }
}
