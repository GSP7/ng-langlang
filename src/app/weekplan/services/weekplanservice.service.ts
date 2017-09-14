import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Http, Headers, Request, RequestMethod, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Weekplan } from '../models/weekplan';

@Injectable()
export class WeekplanserviceService {
  private API_PATH = 'http://localhost:56718/api/Weekplan';

  constructor(private http: Http) { }

  loadWeekplan(userID: string): Observable<Weekplan[]> {
    return this.request({
      method: RequestMethod.Get,
      url: `${this.API_PATH}?userId=${userID}`
    });
  }

  createWeekplan(body: any): Observable<Weekplan> {
    return this.request({
      body,
      method: RequestMethod.Post,
      url: `${this.API_PATH}/CreateWeekplan`
    });
  }

  updateWeekplan(body: any): Observable<Weekplan> {
    return this.request({
      body,
      method: RequestMethod.Put,
      url: `${this.API_PATH}/UpdateWeekplan`
    });
  }

  deleteWeekplan(ids: any): Observable<Weekplan> {
    return this.request({
      method: RequestMethod.Delete,
      url: `${this.API_PATH}/DeleteWeekplan?ids=${ids}`
    });
  }

  request(options: any) {
    if (options.body) {
      if (typeof options.body !== 'string') {
        options.body = JSON.stringify(options.body);
      }
      options.headers = new Headers({
        'Content-Type': 'application/json'
      });
    }
    return this.http.request(new Request(options))
      .map((res: Response) => res.json());
  }
}
