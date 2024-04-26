import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-node-mysql-app';
  username!: string;
  password!: string;
  apiUrl = 'http://localhost:4200/register'; // Node.js backend API URL

  constructor(private http: HttpClient) { }

  register() {
    const user = { username: this.username, password: this.password };
    this.http.post<any>(`${this.apiUrl}/register`, user)
      .subscribe(
        () => {
          console.log('User registered successfully');
          // Optionally, navigate to another page
        },
        error => {
          console.error('Error registering user:', error);
        }
      );
  }
}
