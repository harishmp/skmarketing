import { Component, OnInit } from '@angular/core';
import {DataService} from '../services/data.service';
import '../../../src/assets/js/file-upload.js';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css']
})
export class PersonalDetailsComponent implements OnInit {
  personalDetails : string;
  na="N/A";

  constructor(public reportService: DataService) { }

  ngOnInit(): void {
    this.reportService.getpersonaldetails().subscribe(res => {   
      let resObj = res.json();  
      // if (res.status == true) {
      //   console.log('Success');
      // }
      this.personalDetails = resObj.data[0];
      console.log('this.personalDetails==>', this.personalDetails);
    },
    err => {
      console.log('In Error Block');
      console.log(typeof (err));
    });
  }

}
