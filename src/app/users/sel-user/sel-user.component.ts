import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-sel-user',
  templateUrl: './sel-user.component.html',
  styleUrls: ['./sel-user.component.scss']
})
export class SelUserComponent implements OnInit {

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) { }

  profileInfo: any = {}

  ngOnInit(): void {
    this.profileInfo = JSON.parse(sessionStorage.getItem('selUser'));
  }

  ngOnDestroy(): void {
    sessionStorage.removeItem('selUser')
  }

}
