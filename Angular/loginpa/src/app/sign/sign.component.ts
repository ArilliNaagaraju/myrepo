import { HttpClient, HttpClientModule} from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sign',
  standalone: true,
  imports: [HttpClientModule,FormsModule],
  templateUrl: './sign.component.html',
  styleUrl: './sign.component.css'
})
export class SignComponent {
  formData: any = {};

  constructor(private http: HttpClient) {}

  submitForm() {
    this.http.post<any>('http://localhost:3006/sign', this.formData)
      .subscribe(
        (response) => {
          console.log('Response from server:', response);
          // Handle response as needed
        },
        (error) => {
          console.error('Error:', error);
          // Handle error as needed
        });
  }
}
