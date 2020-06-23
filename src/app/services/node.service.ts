import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

let carData = require('../helpers/data.json');

@Injectable({
  providedIn: 'root'
})
export class NodeService {

  constructor(private http: Http) { 
    console.log("carData", carData);
  }

  getFiles() {
    return this.http.get('')
                .toPromise()
                .then(res => res.json().data);
}
}
