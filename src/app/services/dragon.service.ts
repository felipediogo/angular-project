import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DragonService {
  constructor(private http: HttpClient) { }
  get() {
    return this.http.get('https://dragons-api.herokuapp.com/api/dragons');
  }
}