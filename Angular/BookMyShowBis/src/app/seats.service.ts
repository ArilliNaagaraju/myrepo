import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class SeatsService {
  private apiUrl = 'http://localhost:3000/save-seating'; 

  constructor(private http: HttpClient) {}

  saveSeatingData(seatingData: any): Observable<any> {
    return this.http.post(this.apiUrl, seatingData);
  }
}
