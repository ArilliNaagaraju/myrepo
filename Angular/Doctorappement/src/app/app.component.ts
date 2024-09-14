import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Doctorappement';
  booking = {
    name: '',
    phone: '',
    date: '',
    time: ''
  };
  responseMessage: string = '';

  constructor(private http: HttpClient) {}

  submitBooking() {
    this.http.post<{ message: string }>('http://localhost:3000/api/book', this.booking)
      .subscribe(
        (response) => {
          this.responseMessage = response.message;
        },
        (error) => {
          this.responseMessage = 'Failed to book the appointment. Please try again.';
        }
      );
  }
}
