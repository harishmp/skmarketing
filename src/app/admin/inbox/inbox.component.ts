import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {
  enquirylist : string;
  na="N/A";

  constructor(public reportService: DataService) { }

  ngOnInit(): void {
    this.reportService.getenquirylist().subscribe(res => {   
      let resObj = res.json();
      this.enquirylist = resObj.data.personal_detl;
      console.log('this.enquirylist==>', this.enquirylist);
    },
    err => {
      console.log('In Error Block');
      console.log(typeof (err));
    });
  }

}
