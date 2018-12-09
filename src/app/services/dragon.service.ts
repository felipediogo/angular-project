import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DragonService {
  API_URL = 'https://dragons-api.herokuapp.com/api/dragons';
  constructor(private http: HttpClient) { }
  getDragons() {
    return this.http.get(this.API_URL);
  }

  getDragon(slug: string) {
    return this.http.get(`${this.API_URL}/${slug}`);
  }

  postDragon(dragon: {}) {
    return this.http.post(this.API_URL, dragon);
  }

  deleteDragon(slug: string) {
    return this.http.delete(`${this.API_URL}/${slug}`);
  }
}
