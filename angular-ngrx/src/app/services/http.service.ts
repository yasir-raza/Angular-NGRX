import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private baseUrl = 'https://jsonplaceholder.typicode.com'

  constructor(private httpClient: HttpClient) { }

  get(url: string, params?: any) : Observable<any> {
    const data = {params};
    return this.httpClient.get(this.baseUrl + url, data);

  }


  
}
