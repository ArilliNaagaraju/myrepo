import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {
  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  getReviews(bankId: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/reviews/${bankId}`);
  }

  addReview(review: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/reviews`, review);
    
  }
  }

