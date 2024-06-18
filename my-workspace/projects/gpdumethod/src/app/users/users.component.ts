import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  newName: string = '';
  newEmail: string = '';

  constructor(private http: HttpClient) { }

  addUser() {
    const newUser = { name: this.newName, email: this.newEmail };
    this.http.post<any>('http://localhost:3000/api/users', newUser).subscribe(response => {
      console.log(response.message);
      this.newName = ''; // Clear input fields after successful addition
      this.newEmail = '';
    });
  }
}
