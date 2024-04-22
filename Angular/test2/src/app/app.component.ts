import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'test2';
  ename: string | undefined; // Assuming this is where you store the data to be sent

  constructor(private http: HttpClient) { }

  getdata() {
    // Adjust the URL to the correct endpoint
    this.http.post<any>('http://localhost/endpoint', { ename: this.ename })
      .subscribe(
        response => {
          console.log(response);
          // Handle response
        },
        error => {
          console.error(error);
          // Handle error
        }
      );
  }
}
