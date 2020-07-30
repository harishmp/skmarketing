import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-all-users',
  templateUrl: './list-all-users.component.html',
  styleUrls: ['./list-all-users.component.css']
})
export class ListAllUsersComponent implements OnInit {
  dataresult: [];

  constructor(public reportService: DataService, private router: Router) { }

  ngOnInit(): void {
    this.reportService.getmemberlist().subscribe(res => {   
      let resObj = res.json();
      this.dataresult = resObj;
    },
    err => {
      console.log('In Error Block');
      console.log(typeof (err));
    });
  }

  onClickAddNewMember(){
    this.router.navigate(['/add-edit-details']);
  }

}
