import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs';
import { map } from "rxjs/operators"; 
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {environment} from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: Http) { }

  getToken = (username, password) => {
    console.log("getting token")
    let _url: string = environment.baseUrl + 'login/';

    let Authorization = btoa("openIdClient:tryoutonemoretime");

    let headers: Headers = new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + Authorization,
    });
    let options: RequestOptions = new RequestOptions({headers: headers});

    // let body = new URLSearchParams();
    // body.set('login', username);
    // body.set('password', password);
    // body.set('grant_type', 'password');

    let body = {
    'password': password,
    'username': username,
    'grant_type': 'password',
    'client_secret': 'abHNDOk0vOsVPNKViwQbj3RNEpumgtyirpqRoYKDLhqAoTrAabiNX4iX9heVcqL2BopUs0nQQDQyivp3NXyEWtKruYRvY74cr2TpHb0M0aEs2JpRmnwbIhA6OJnvhjXI',
    'client_id': '6EjMtZMCKcHKQRSyRMHQ6rZjPzfGIySTcDRszx8H',
    // 'device_name': 'W',
    }

    console.log('body', body)

    return this.http.post(_url,  body).pipe(map(
      res => {
        let resObj = res.json();
        console.log('resObj---------', resObj);
        window.localStorage.setItem('access_token', resObj.data['access_token']);
        window.localStorage.setItem('refresh_token', resObj.data['refresh_token']);
        return true;
      }))
      .catch(this._errorHandler);
  }

  getToken1 = (username, password) => {
    let _url: string = environment.baseUrl + 'login/';

    let Authorization = btoa("openIdClient:tryoutonemoretime");

    let headers: Headers = new Headers({
      // 'Content-Type': 'application/x-www-form-urlencoded',
      // 'Authorization': 'Basic ' + Authorization,
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
      'Access-Control-Allow-Credentials': true,
      'Content-Type': 'application/json; charset=UTF-8'
    });
    let options: RequestOptions = new RequestOptions({headers: headers});

    let formData = new FormData(); 
    formData.append('password', password); 
    formData.append('username', username); 
    formData.append('grant_type', 'password'); 
    formData.append('client_secret', 'abHNDOk0vOsVPNKViwQbj3RNEpumgtyirpqRoYKDLhqAoTrAabiNX4iX9heVcqL2BopUs0nQQDQyivp3NXyEWtKruYRvY74cr2TpHb0M0aEs2JpRmnwbIhA6OJnvhjXI');
    formData.append('client_id', '6EjMtZMCKcHKQRSyRMHQ6rZjPzfGIySTcDRszx8H');

    console.log('formData------------', formData)

    return this.http.post(_url,  formData).pipe(map(
      res => {
        let resObj = res.json();
        console.log('resObj---------', resObj);
        window.localStorage.setItem('access_token', resObj.data['access_token']);
        window.localStorage.setItem('refresh_token', resObj.data['refresh_token']);
        window.localStorage.setItem('role', resObj.data['role']);
        window.localStorage.setItem('user', username);
        return res;
      }))
      .catch(this._errorHandler);
  }

  getUserDetails = () => {
    let _url: string = environment.baseUrl + '/authentication/op/me';

    return this.http.get(_url).map(
      res => {
        window.localStorage.setItem('currentUser', JSON.stringify({username: res['userName']}));
        window.localStorage.setItem('fleet_name', res['fleet_name']);
        window.localStorage.setItem('role', res['role']);
        window.localStorage.setItem('demo', res['demo']);
        return true;
      })
      .catch(this._errorHandler);
  }

  private _errorHandler(error: Response) {
    return Observable.throw(JSON.parse(error['_body']));
  }
}
