import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-nav-right',
  templateUrl: './nav-right.component.html',
  styleUrls: ['./nav-right.component.scss'],
  providers: [NgbDropdownConfig]
})
export class NavRightComponent implements OnInit {
  userObj: any = {};
  constructor(
    public router: Router
  ) {
    this.userObj = JSON.parse(sessionStorage.getItem('loginObj'));
  }

  ngOnInit() { }

  gotoLogout() {
    sessionStorage.clear();
    localStorage.clear();
    this.router.navigate(['./auth/signin'])
  }

  gotoAdminprofile() {
    this.router.navigate(['./admin-profile'])
  }

}
