import { Component, OnInit } from '@angular/core';
import {DataService} from '../services/data.service';

@Component({
  selector: 'app-my-business',
  templateUrl: './my-business.component.html',
  styleUrls: ['./my-business.component.css']
})
export class MyBusinessComponent implements OnInit {
  selectedTab = 'my-business';
  box1: string;
  box2: string;
  box3: string;
  na="N/A";

  constructor(public reportService: DataService) { }

  ngOnInit() {
    this.reportService.gettreetopsummary().subscribe(res => {   
      let resObj = res.json();
      this.box1 = resObj.data[1].box1;
      this.box2 = resObj.data[1].box2;
      this.box3 = resObj.data[1].box3;
    },
    err => {
      console.log('In Error Block');
      console.log(typeof (err));
    });
  }

}
