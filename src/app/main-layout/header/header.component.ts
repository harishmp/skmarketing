import { Component, Input, OnInit } from '@angular/core';

import {Router} from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() selectedTab : string;

  isUserLoggedIn = "website";
  closeResult = '';

  constructor(private router: Router, private modalService: NgbModal) { }

onClickMenuLogout(){
  this.isUserLoggedIn = "website";
  this.router.navigate(['/dashboard']);
  console.log('isUserLoggedIn', this.isUserLoggedIn);
  window.localStorage.setItem('isUserLoggedIn', this.isUserLoggedIn);
}

  ngOnInit() {
    this.isUserLoggedIn = window.localStorage.getItem('isUserLoggedIn');
    console.log('isUserLoggedIn-login check', this.isUserLoggedIn);
    if (this.isUserLoggedIn === null || this.isUserLoggedIn === undefined || this.isUserLoggedIn === '' ) {
      window.localStorage.setItem('isUserLoggedIn', "website");
    }
  }

  onClickMenuLogin(contentLogin) {
    this.modalService.open(contentLogin, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
    // this.modalService.dismissAll();
  }

  showMessageFromChild(message: any) {
    this.isUserLoggedIn = message;
    window.localStorage.setItem('isUserLoggedIn', this.isUserLoggedIn);
    console.log('this.isUserLoggedIn', this.isUserLoggedIn);
    this.modalService.dismissAll();
 }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
