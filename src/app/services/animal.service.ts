import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {


  private apiUrl = 'http://localhost:8080/animals';

  constructor(private http: HttpClient) { }

  getAnimais(): Observable<any> {
    return this.http.get<any>(this.apiUrl + "/getAll");
  }

  getById(id: any): Observable<any> {
    return this.http.get<any>(this.apiUrl + `?id=${id}`);
}
}
