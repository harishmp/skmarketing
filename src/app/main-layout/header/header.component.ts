import { Component, Input, OnInit } from '@angular/core';

import {Router} from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() selectedTab : string;

  isUserLoggedIn = "false";

  constructor(private router: Router) { }

 onClickMenuLogin(){
  this.isUserLoggedIn = "false";
  this.router.navigate(['/login']);
  console.log('isUserLoggedIn', this.isUserLoggedIn);
  window.localStorage.setItem('isUserLoggedIn', this.isUserLoggedIn);
}

onClickMenuLogout(){
  this.isUserLoggedIn = "false";
  this.router.navigate(['/dashboard']);
  console.log('isUserLoggedIn', this.isUserLoggedIn);
  window.localStorage.setItem('isUserLoggedIn', this.isUserLoggedIn);
}

  ngOnInit() {
    this.isUserLoggedIn = window.localStorage.getItem('isUserLoggedIn');
    console.log('isUserLoggedIn', this.isUserLoggedIn);
  }

}
