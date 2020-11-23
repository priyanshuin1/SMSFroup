import { Injectable } from '@angular/core';
import { Observable,Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from 'rxjs/operators';
import { config } from '../config';

let headers = new HttpHeaders();

const basicUrl: string = config.basicUrl;

@Injectable({
  providedIn: 'root'
})
export class AllServiceService {

  constructor(private http: HttpClient) { }




  getAllData(): Observable<any> {
  
    return this.http.get<any>(basicUrl + 'getAllData')
  }

  addData(data): Observable<any> {
  console.log(data,'skjdksfksdhfksdhf');
    return this.http.post<any>(basicUrl + 'addData', data, { headers: headers })
  }
  
}
