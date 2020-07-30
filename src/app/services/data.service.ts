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

  getpersonaldetails(queryParam) {
    let token = 'Bearer' + ' ' + window.localStorage.getItem('access_token');
    let headers = new Headers();
    headers.append('Authorization', token);
    let options: RequestOptions = new RequestOptions({headers: headers});

    let _url: string = environment.baseUrl + 'user_profile/';
    return this.http.get(_url, options).map(
      res => {
        return res;
      })
      .catch(this._errorHandler);
  };

  gettreetopsummary() {
    let token = 'Bearer' + ' ' + window.localStorage.getItem('access_token');
    let headers = new Headers();
    headers.append('Authorization', token);
    let options: RequestOptions = new RequestOptions({headers: headers});

    let _url: string = environment.baseUrl + 'tree/?member_id=' + window.localStorage.getItem('user') + '&level_req=1';
    return this.http.get(_url, options).map(
      res => {
        return res;
      })
      .catch(this._errorHandler);
  };

  getadmindashboard() {
    let token = 'Bearer' + ' ' + window.localStorage.getItem('access_token');
    let headers = new Headers();
    headers.append('Authorization', token);
    let options: RequestOptions = new RequestOptions({headers: headers});

    let _url: string = environment.baseUrl + 'admin_dash_board';
    return this.http.get(_url, options).map(
      res => {
        return res;
      })
      .catch(this._errorHandler);
  };

  getmemberdashboard() {
    let token = 'Bearer' + ' ' + window.localStorage.getItem('access_token');
    let headers = new Headers();
    headers.append('Authorization', token);
    let options: RequestOptions = new RequestOptions({headers: headers});

    let _url: string = environment.baseUrl + 'user_dashboard';
    return this.http.get(_url, options).map(
      res => {
        return res;
      })
      .catch(this._errorHandler);
  };

  getmemberlist() {
    let token = 'Bearer' + ' ' + window.localStorage.getItem('access_token');
    let headers = new Headers();
    headers.append('Authorization', token);
    let options: RequestOptions = new RequestOptions({headers: headers});

    let _url: string = environment.baseUrl + 'admin_member_list';
    return this.http.get(_url, options).map(
      res => {
        return res;
      })
      .catch(this._errorHandler);
  };

  getavailablepositions() {
    let token = 'Bearer' + ' ' + window.localStorage.getItem('access_token');
    let headers = new Headers();
    headers.append('Authorization', token);
    let options: RequestOptions = new RequestOptions({headers: headers});

    let _url: string = environment.baseUrl + 'available_positions/?member=' + window.localStorage.getItem('user');
    return this.http.get(_url, options).map(
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

  createUserProfile(formData) {
    let token = 'Bearer' + ' ' + window.localStorage.getItem('access_token');
    let headers = new Headers();
    headers.append('Authorization', token);
    let options: RequestOptions = new RequestOptions({headers: headers});

    let _url: string = environment.baseUrl + 'user_profile/';
    return this.http.post(_url, formData, options).map(
      res => {
       return res;

      })
      .catch(this._errorHandler);
  }

private _errorHandler(error: Response) {
  return Observable.throw(error)
}
}
