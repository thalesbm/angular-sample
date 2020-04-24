import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/UserModel';

@Injectable()
export class UserService {
  constructor (
    private http: HttpClient
  ) {}

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  getUser(): Observable<User> {
    return this.http.get<User>("https://reqres.in/api/users/2", this.httpOptions);
  }
}
