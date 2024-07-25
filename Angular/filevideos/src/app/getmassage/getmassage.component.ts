import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-getmassage',
  standalone: true,
  imports: [],
  templateUrl: './getmassage.component.html',
  styleUrl: './getmassage.component.css'
})
export class GetmassageComponent {
  message: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('http://localhost:3000', { responseType: 'text' }).subscribe(
      (response) => {
        this.message = response;
      },
      (error) => {
        console.error('Error fetching message:', error);
      }
    );
  }
  }

