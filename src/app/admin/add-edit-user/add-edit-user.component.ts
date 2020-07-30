import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';
import {Subject} from 'rxjs';
import {debounceTime} from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

let memberModel = require('../../helpers/member_model.json');

@Component({
  selector: 'app-add-edit-user',
  templateUrl: './add-edit-user.component.html',
  styleUrls: ['./add-edit-user.component.css']
})
export class AddEditUserComponent implements OnInit {
  availablePositions : string;
  na="N/A";

  alerts: any = [];
  userData=[];
  queryParam: string = '';
  member = Object.assign({}, memberModel);

  private _success = new Subject<string>();

  staticAlertClosed = false;
  successMessage = '';
  alerttype = '';

  constructor(public reportService: DataService, private route: ActivatedRoute) { 
    this.route.queryParams.subscribe(params => {
      this.queryParam = params['val'];
      console.log('this.queryParam', this.queryParam);
    });
  }

  public changeSuccessMessage(alertmessage) {
    // this._success.next(`${new Date()} - New User added Successfully !!!.`);
    this._success.next(` New User added Successfully !!!.`);
    this.alerttype = "success";
  }

  onFormSubmit() {
    console.log('member----', this.member);

    let formData = new FormData(); 
    formData.append('username', this.member.username); 
    formData.append('title', this.member.title); 
    formData.append('first_name', this.member.first_name); 
    formData.append('last_name', this.member.last_name);
    formData.append('gaurdian_relation', this.member.gaurdian_relation);
    formData.append('gaurdian_name', this.member.gaurdian_name); 
    formData.append('dob', this.member.dob); 
    formData.append('photo', this.member.photo); 
    formData.append('pan_number', this.member.pan_number);
    formData.append('pancard_pic', this.member.pancard_pic);
    formData.append('address', this.member.address); 
    formData.append('address_2', this.member.address_2); 
    formData.append('city', this.member.city); 
    formData.append('pincode', this.member.pincode);
    formData.append('state', this.member.state);
    formData.append('mobile', this.member.mobile); 
    formData.append('email', this.member.email); 
    formData.append('referal', this.member.referal); 
    formData.append('upline_id', this.member.upline_id);
    formData.append('nominee_relation', this.member.nominee_relation);
    formData.append('nominee', this.member.nominee); 
    formData.append('bank_name', this.member.bank_name); 
    formData.append('acc_number', this.member.acc_number); 
    formData.append('micr_code', this.member.micr_code);
    formData.append('ifsc_code', this.member.ifsc_code);
    formData.append('position', this.member.position);

    this.reportService.createUserProfile(formData).subscribe(res => {
      if (res['message'] == "sucess") {
        this.changeSuccessMessage('New User added Successfully !!!');
        console.log("user-management", res);
        this.userData = res['users'];
      }
    },
    err => {
      console.log("In Error Block");
      console.log(typeof (err));
  });
  }

  // onFormSubmit(event) {
  //   console.log(event);
  //   // let checkedRoles = this.names.filter(x=>x.selected === true);
  //   this.validateForm(event).then(data => {
  //     this.userAdd(data);
  //     console.log(data);
  //   }).catch(e => {
  //     this.changeSuccessMessage(e);
  //   });
  //    console.log("form111");
  // }

  private validateForm(event) {
    console.log("validateForm");
    let userDetails = {};
    let user = {};
    userDetails["user"] = user;
    return new Promise((resolve, reject) => {
      if (event.Id != null && event.Id != undefined && event.Id != "") {
        user['role'] = event.Id;
        console.log("validateForm", user['role']);
        if (event.usrfname != null && event.usrfname != undefined && event.usrfname != "") {
          user['first_name'] = event.usrfname;
          console.log("validateForm", user['first_name']);
          if (event.usrlname != null && event.usrlname != undefined && event.usrlname != "") {
            user['last_name'] = event.usrlname;
            console.log("validateForm", user['last_name']);
            if (event.department != null && event.department != undefined && event.department != "") {
              user['department'] = event.department;
              console.log("validateForm", user['department']);
              if (event.email != null && event.email != undefined && event.email != "") {
                user['email'] = event.email;
                console.log("validateForm", user['email']);
                if (event.address != null && event.address != undefined && event.address != "") {
                  user['address'] = event.address;
                  console.log("validateForm", user['address']);
                  if (event.dob != null && event.dob != undefined && event.dob != "") {
                    user['dob'] = event.dob;
                    console.log("validateForm", user['dob']);
                    if (event.uname != null && event.uname != undefined && event.uname != "") {
                      user['user_name'] = event.uname;
                      console.log("validateForm", user['user_name']);
                      if (event.gender != null && event.gender != undefined && event.gender != "") {
                        user['gender'] = event.gender;
                        console.log("validateForm", user['gender']);
                      }
                      else {
                        reject('Please Select the gender');
                        console.log("validateForm gender");
                      }
                      resolve(userDetails);
                      console.log("validateForm userDetails");
                    }
                    else {
                      reject('Please Select the uname');
                      console.log("validateForm uname");
                    }
                  }
                  else {
                    reject('Please Select the dob');
                    console.log("validateForm dob");
                  }
                }
                else {
                  reject('Please Select the address');
                  console.log("validateForm address");
                }
              }
              else {
                reject('Please Select the email');
                console.log("validateForm email");
              }
            }
            else {
              reject('Please Select the department');
              console.log("validateForm department");
            }
          }
          else {
            reject('Please Select the usrlname');
            console.log("validateForm usrlname");
          }
        }
        else {
          reject("Please Select the usrfname");
          console.log("validateForm usrfname");
        }
      }
      else {
        reject("Please Select the Role");
        console.log("validateForm Role");
      }
    });
  }

  userAdd(userDetails) {
    console.log("userAdd ;", userDetails);

  this.reportService.createUserProfile(userDetails).subscribe(res => {
    if (res['message'] == "sucess") {
      this.changeSuccessMessage('New User added Successfully !!!');
      console.log("user-management", res);
      this.userData = res['users'];
    }
  },
  err => {
    console.log("In Error Block");
    console.log(typeof (err));
});
  }

  ngOnInit(): void {
    this.reportService.getavailablepositions().subscribe(res => {   
      let resObj = res.json();
      this.member.position = resObj.data.personal_detl ? resObj.data.personal_detl : resObj.data;
      console.log('this.member.position==>', this.member.position, resObj);
    },
    err => {
      console.log('In Error Block');
      console.log(typeof (err));
    });

    // alert goes here
    setTimeout(() => this.staticAlertClosed = true, 20000);

    this._success.subscribe(message => this.successMessage = message);
    this._success.pipe(
      debounceTime(5000)
    ).subscribe(() => this.successMessage = '');
  }

}
