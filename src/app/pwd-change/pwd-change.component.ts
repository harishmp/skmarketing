import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { OldPwdValidators } from './old-pwd.validators';

@Component({
  selector: 'app-pwd-change',
  templateUrl: './pwd-change.component.html',
  styleUrls: ['./pwd-change.component.css']
})
export class PwdChangeComponent implements OnInit {
  form: FormGroup; 

  constructor(private fb: FormBuilder) { 
    this.form = this.fb.group({
      'oldPwd': ['',Validators.required,OldPwdValidators.shouldBe1234],
      'newPwd': ['',Validators.required],
      'confirmPwd': ['',Validators.required]
    }, {
      validator: OldPwdValidators.matchPwds
    });
  }

  get oldPwd(){
    return this.form.get('oldPwd');
  }

   get newPwd(){
    return this.form.get('newPwd');
  }

   get confirmPwd(){
    return this.form.get('confirmPwd');
  }

  ngOnInit(): void {
  }

}
