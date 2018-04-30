import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import {Subject} from 'rxjs/Subject';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class DetailsService {
  public currentItem = new BehaviorSubject<any>(
    {
      "title" : "Solo: A Star Wars Story ",
      "subtitle": "Release date: May 25, 2018",
      "image_url": "https://cdn.mos.cms.futurecdn.net/oDx6VWaoSo6x938pMTeCVD-650-80.jpeg",
      "content": "That's surely what everybody's favorite roguish Star Wars smuggler would say in response to all the production hiccups that have encumbered the making of this Han Solo origin story. "
  });
  constructor(private http: HttpClient) { }

  getData(): any {
    console.log('GET data');
    return this.http.get('../../../assets/data/images.json')
    .map(this.extractData)
    .catch(this.handleError);
  }

  public extractData(res: Response) {
    return res || [];
  }

  public handleError(error: any) {
    const errMsg = (error.message) ? error.message :
        error.status ? `${error.status} - ${error.statusText}` : 'Server error, something went wrong';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

  fetchCurrent(item) {
    console.log('feteched at service');
    this.currentItem.next(item);
  }

  getCurrent(): Observable<any> {
    return this.currentItem.asObservable();
  }
}
