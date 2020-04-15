import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable()
export class UserService {
  constructor (
    private http: HttpClient
  ) {}

  getUser() {
    return this.http.get(`https://conduit.productionready.io/api/profiles/eric`);
  }
}
