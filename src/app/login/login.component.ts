import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth.service';
import {Subject} from 'rxjs';
import {debounceTime} from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginErrorMessage: string;
  isUserLoggedIn = 'website';
  @Output() childMessage = new EventEmitter<string>();

  private _success = new Subject<string>();

  staticAlertClosed = false;
  successMessage = '';
  alerttype = '';

  constructor(private router: Router, private auth: AuthService) { }  

  public changeSuccessMessage(alertmessage) {
    this._success.next(alertmessage);
    this.alerttype = "success";
  }

  ngOnInit() {
    this.isUserLoggedIn = window.localStorage.getItem('isUserLoggedIn');

    // alert goes here
    setTimeout(() => this.staticAlertClosed = true, 20000);

    this._success.subscribe(message => this.successMessage = message);
    this._success.pipe(
      debounceTime(5000)
    ).subscribe(() => this.successMessage = '');
  }

  loginUser(loginformData) {
    const {username, password} = loginformData.value
    this.getToken_UserDetails(username, password);
    this.childMessage.emit(username);
  }

  getToken_UserDetails = (username, password) => {
    this.auth.getToken1(username, password).subscribe(res => {
      let resObj = res.json();
      // this.result = resObj.data;
      console.log('this.res--------', resObj);

      if (resObj['status'] != 200) {
        this.changeSuccessMessage(resObj['error_message']);
      }
      if(window.localStorage.getItem('role') == 'member'){
        window.localStorage.setItem('isUserLoggedIn', 'user');
        this.router.navigate(['./dashboard-member']);
      } else if(window.localStorage.getItem('role') == 'admin') {
        window.localStorage.setItem('isUserLoggedIn', 'admin');
        this.router.navigate(['./dashboard-admin']);
      } else {
        window.localStorage.setItem('isUserLoggedIn', 'website');
        this.router.navigate(['./dashboard']);
      }
    },
    err => {
      console.log(err)
      this.loginErrorMessage = err['error_description'];
    });
}

}
