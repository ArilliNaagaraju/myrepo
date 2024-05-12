import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  formData: any = {};

    constructor(private http: HttpClient) { }

    submitForm() {
        this.http.post<any>('http://localhost:3010/submit', this.formData).subscribe(
            () => {
                console.log('Form submitted successfully');
                // Reset the form after submission
                this.formData = {};
            },
            (error) => {
                console.error('Error submitting form:', error);
            }
        );
    }
}
