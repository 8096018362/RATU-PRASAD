import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  active = 1;
  videoListTableOptions: any = {};

  constructor(
    public router: Router, private api: ApiService
  ) { }

  ngOnInit() {
    this.lockbyPassword();
    this.lockbyCrowns();
    this.lockbyPublic();
  }

  public lockbyPassword() {
    this.api.fetchStreamByType('privatepassword').subscribe(response => {
      console.log(response)
    })
  }

  public lockbyCrowns() {
    this.api.fetchStreamByType('privatecrowns').subscribe(response => {
      console.log(response)
    })
  }

  public lockbyPublic() {
    this.api.fetchStreamByType('public').subscribe(response => {
      console.log(response)
    })
  }

  gotoUserDetails(obj) {
    const link = ['/users/view', obj.id];
    this.router.navigate(link);
  }

  gotoVideoDetails(obj) {
    const link = ['/videos/list', obj.id];
    this.router.navigate(link);
  }
}
