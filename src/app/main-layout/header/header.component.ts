import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  onClickMenu(data){
    console.log("onClickMenu", data)
   this.router.navigate(['/contact-us']);
 }

  ngOnInit() {
  }

}
