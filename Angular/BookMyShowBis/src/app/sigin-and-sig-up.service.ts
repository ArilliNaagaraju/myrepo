import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class SiginAndSigUpService {
  private authUrl = 'http://localhost:3001/'; 

  constructor(private http: HttpClient) {}

  // Method for signup
  signup(userData: any): Observable<any> {
    return this.http.post(this.authUrl + 'signup', userData); // Correct URL for signup
  }

  // Method for signin
  signin(credentials: any): Observable<any> {
    return this.http.post(this.authUrl + 'signin', credentials); // Correct URL for signin
  }


  //  Method to get movie data
  getUsers(): Observable<any> {
    return this.http.get(this.authUrl + 'movies');
  }


  // getMovieData(): Observable<any> {
  //   return this.http.get(this.authUrl + 'movies');
  // }
  
}
