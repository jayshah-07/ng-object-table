import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Detail } from '../models/detail.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getData(): Observable<Detail[]> {
    return <Observable<Detail[]>>this.http.get('https://next.json-generator.com/api/json/get/VyffA6MhV'); 
  }
}
