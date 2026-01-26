import { Injectable } from '@angular/core';
import { User } from './User';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmpService {

  private _url: string = "/data/employee.json";

  constructor(private http: HttpClient){}

  getEmployees(): Observable<User[]>{
    return this.http.get<User[]>(this._url);
  }
}
