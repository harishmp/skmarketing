import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginErrorMessage: string;
  isUserLoggedIn = 'website';
  @Output() childMessage = new EventEmitter<string>();

  constructor(private router: Router, private auth: AuthService) { }  

  ngOnInit() {
    this.isUserLoggedIn = window.localStorage.getItem('isUserLoggedIn');
  }

  loginUser(loginformData) {
    // const {userName, password} = loginformData.value;
    // this.isUserLoggedIn = 'true';
    // window.localStorage.setItem('isUserLoggedIn', this.isUserLoggedIn);
    // console.log('loginUser-isUserLoggedIn', this.isUserLoggedIn);
    // this.router.navigate(['./my-business']);
    const {username, password} = loginformData.value
    this.getToken_UserDetails(username, password);
    this.childMessage.emit(username);
  }

  getToken_UserDetails = (username, password) => {
    this.auth.getToken(username, password).subscribe(res => {
      this.isUserLoggedIn = username;
      window.localStorage.setItem('isUserLoggedIn', this.isUserLoggedIn);
      if(this.isUserLoggedIn == 'user') {
        this.router.navigate(['./dashboard-member']); 
      } else {
        this.router.navigate(['./dashboard-admin']); 
      }
    },
    err => {
      console.log(err)
      this.loginErrorMessage = err['error_description'];
    });
}

}
