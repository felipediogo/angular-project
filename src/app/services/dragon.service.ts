import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class DragonService {
  public API_URL = 'https://dragons-api.herokuapp.com/api/dragons';
  constructor(private http: HttpClient) {}

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  getDragonsCount(): Observable<any> {
    return this.requestGetDragons(1).pipe(
      map(this.extractData),
      map(this.getTotalCount));
  }

  getDragons(totalCount: number): Observable<any> {
    return this.requestGetDragons(totalCount).pipe(
      map(this.extractData));
  }

  getDragon(slug: string): Observable<any> {
    return this.http.get(`${this.API_URL}/${slug}`).pipe(
      map(this.extractData)
    );
  }

  saveDragon(dragon: {slug: string, histories: any}): Observable<any> {
    const list = dragon.histories.split('\n');
    dragon.histories = list;
    if (dragon.slug) {
      return this.http.put(`${this.API_URL}/${dragon.slug}`, dragon).pipe(
        map(this.extractData)
      );
    }
    return this.http.post(this.API_URL, dragon).pipe(
      map(this.extractData)
    );
  }

  deleteDragon(slug: string): Observable<any> {
    return this.http.delete(`${this.API_URL}/${slug}`)
      .pipe(map(this.extractData));
  }

  private getTotalCount(data: { _metadata: { total_count: number } }): number {
    return data._metadata.total_count;
  }

  private requestGetDragons(size: number = 1): Observable<any> {
    return this.http.get(`${this.API_URL}?size=${size}`);
  }
}
