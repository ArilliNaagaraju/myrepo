import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-videoandfile',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './videoandfile.component.html',
  styleUrl: './videoandfile.component.css'
})
export class VideoandfileComponent {
  data = { name: '', email: '' };

  constructor(private http: HttpClient) {}

  onSubmit() {
    this.http.post('http://localhost:3000/api/data', this.data)
      .subscribe(response => {
        console.log('Data saved successfully', response);
      });
  }
}
