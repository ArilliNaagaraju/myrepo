import { HttpClient, HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-getput',
  standalone: true,
  imports: [FormsModule,HttpClientModule],
  templateUrl: './getput.component.html',
  styleUrl: './getput.component.css'
})
export class GetputComponent {
  formData = {
    name: '',
    password: ''
  };

  constructor(private http: HttpClient) {}

  submitForm() {
    this.http.post<any>('http://localhost:65188/getput', this.formData)
      .subscribe(response => {
        console.log('Response from server:', response);
        // Handle response as needed
      }, (error: HttpErrorResponse) => {
        console.error('Error occurred:', error);
        // Handle error
      });
  }
}
