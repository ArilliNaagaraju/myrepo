import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sing',
  standalone: true,
  imports: [FormsModule,HttpClientModule],
  templateUrl: './sing.component.html',
  styleUrl: './sing.component.css'
})
export class SingComponent {
  constructor(private http: HttpClient) { }

  submitForm(name: string, password: string) {
    this.http.post('http://localhost:3000/sing', { name, password }).subscribe(
      response => console.log('User saved successfully!'),
      error => console.error('Error saving user:', error)
    );
  }
}
