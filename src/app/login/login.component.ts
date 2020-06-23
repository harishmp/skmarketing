import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginErrorMessage: string;
  isUserLoggedIn: any;

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
  }

  getToken_UserDetails = (username, password) => {
    this.auth.getToken(username, password).subscribe(res => {
      this.isUserLoggedIn = 'true';
      window.localStorage.setItem('isUserLoggedIn', this.isUserLoggedIn);
      this.router.navigate(['./my-business']); 
    },
    err => {
      console.log(err)
      this.loginErrorMessage = err['error_description'];
    });
}

}
