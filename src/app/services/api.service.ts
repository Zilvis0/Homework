import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private backendUrl = 'https://homework.fdp.workers.dev/';
  private apiKey = 'swb-222222';

  constructor(private http: HttpClient) {}

  postForm(payload: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-API-KEY': this.apiKey,
      }),
    };
    return this.http.post<any>(this.backendUrl, payload, httpOptions);
  }
}
