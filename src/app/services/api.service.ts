import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl=environment.apiUrl;

  constructor(private http:HttpClient) { }

  books:any;
  randombook:any;

  getBooks(searchTerm: string): Observable<any> {

    const url =  `${this.apiUrl}/?book=${searchTerm}`;
    return this.http.get(url);

  }
  getRandomBook(searchTerm: string): Observable<any> {

    const url =  `${this.apiUrl}/?book=${searchTerm}`;
    return this.http.get(url);

  }
}
