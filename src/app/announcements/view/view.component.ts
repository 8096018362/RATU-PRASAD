import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { takeWhile } from 'rxjs/operators';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit, OnDestroy {
  userTableOptions: any = {};
  componentActive = true;
  announcementData = [];
  showLoading = false;

  constructor(
      public router: Router,
      private api: ApiService
  ) { }

  ngOnInit() {
      this.showLoading = true;
      this.api.getAnnouncement()
          .pipe(takeWhile(() => this.componentActive))
          .subscribe((response: any) => {
              this.announcementData = response;
              this.userTableOptions = {
                dom: 'Bfrtip',
                buttons: [
                    'excel',
                    'csv'
                ],
                pagingType: 'full_numbers',
                pageLength: 10,
                processing: true,
                data: this.announcementData
            };
              this.showLoading = false;
          });
  }

  ngOnDestroy(): void {
      this.componentActive = false;
  }

  addAnnouncement() {
    const link = ['/announcements/add'];
    this.router.navigate(link);
  }

  view(id: string): void {
    this.api.announcementId = id;
    const link = ['/announcements/add'];
    this.router.navigate(link);
  }

}
