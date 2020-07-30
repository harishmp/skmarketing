import { Component, OnInit } from '@angular/core';
import {DataService} from '../services/data.service';
// import '../../../src/assets/js/file-upload.js';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css']
})
export class PersonalDetailsComponent implements OnInit {
  personalDetails : string;
  communication_detl : string;
  user_account_detl : string;
  nominee_detl : string;
  na="N/A";
  queryParam: string = '';

  constructor(public reportService: DataService, private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.queryParam = params['val'];
      console.log('this.queryParam', this.queryParam);
    });
   }

  ngOnInit(): void {
    this.reportService.getpersonaldetails(this.queryParam).subscribe(res => {   
      let resObj = res.json();
      this.personalDetails = resObj.data.personal_detl;
      this.communication_detl = resObj.data.communication_detl;
      this.user_account_detl = resObj.data.user_account_detl;
      this.nominee_detl = resObj.data.nominee_detl;
    },
    err => {
      console.log('In Error Block');
      console.log(typeof (err));
    });

    // nomineee address attachment
  }

}
