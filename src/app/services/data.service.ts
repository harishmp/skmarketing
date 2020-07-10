import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: Http) { }

  getpersonaldetails() {
    let _url: string = environment.baseUrl + 'get_user_profile/';
    return this.http.get(_url).map(
      res => {
        return res;
      })
      .catch(this._errorHandler);
  };

  getavailablepositions() {
    let _url: string = environment.baseUrl + 'available_positions/?member_id=30';
    return this.http.get(_url).map(
      res => {
        return res;
      })
      .catch(this._errorHandler);
  };

  getenquirylist() {
    let _url: string = environment.baseUrl + 'enquiry_form/';
    return this.http.get(_url).map(
      res => {
        return res;
      })
      .catch(this._errorHandler);
  };

  createUserProfile(userDetails) {
    let _url: string = environment.baseUrl + 'get_user_profile/';
    return this.http.post(_url, userDetails).map(
      res => {
       return res;

      })
      .catch(this._errorHandler);
  }

private _errorHandler(error: Response) {
  return Observable.throw(error)
}
}
