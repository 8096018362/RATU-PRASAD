import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { takeWhile } from "rxjs/operators";
import { ApiService } from "src/app/services/api.service";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-livestreamer',
  templateUrl: './livestreamer.component.html',
  styleUrls: ['./livestreamer.component.scss']
})
export class LivestreamerComponent implements OnInit {


  componentActive = true;
  giftsData = [];
  showLoading = false;
  private formatJSONData(res) {
    const body = res.data;
    if (body) {
      return body
    } else {
      return {}
    }
  }

  livestreamerTableOptions = {
    dom: 'Bfrtip',
    lengthMenu: [[10, 25, 50, -1], [10, 25, 50, "All"]],
    ajax: (data, callback, settings) => {

      this.http.get('http://3.108.79.136:3000/api/v1/agent/live-streamer/BQkBFzre77ZHk4OjzucJz6rYQ552')
        .pipe(
          map((this.formatJSONData))
        ).subscribe((jsondata) => {
          callback({ aaData: jsondata == null ? [] : jsondata })
        })
    },

    columns: [
      {
        title: 'Agent Id',
        data: 'name'
      },
      {
        title: 'Streamer Id',
        data: 'id'
      },
      {
        title: 'Date&Time',
        data: 'created_date',
        render: (data, row, index) => {
          if (data != null) {
            const date = new Date(data)
            let dd: any = date.getDate();
            let mm: any = date.getMonth() + 1;
            let hh: any = date.getHours();
            let minute: any = date.getMinutes();
            const yyyy = date.getFullYear();
            if (dd < 10) { dd = '0' + dd }
            if (mm < 10) { mm = '0' + mm }
            return `${dd}-${mm}-${yyyy}  ${hh}:${minute < 10 ? '0' + minute : minute}`;
          } else {
            return '-'
          }
        }
      },
      {
        title: 'User',
        data: 'name',
        //   render: (data, row, index) => {
        //     return ` <div class="media">
        //     <img class="rounded-circle" style="width:40px;"
        //         src="assets/images/user/avatar-1.jpg" alt="activity-user">
        //     <div class="media-body ml-2 mt-2">
        //         <h6>Isabella Christensen</h6>
        //     </div>
        // </div>`
        //   }

      },
      {
        title: 'Country',
        data: 'country',
        render: (data, row, index) => {
          return `<a>${data !== null ? data : ''}</a>`;
        }
        // render: (data, row, index) => {
        //   return `<img src="assets/images/widget/GERMANY.jpg" alt class="img-fluid wid-30 d-inline-block">
        //     <div class="ml-2 d-inline-block">Germany</div>`
        // }
      },
      {
        title: 'Reports',
        data: 'reporteduser',
        render: (data, row, index) => {
          return `<label class="badge badge-light-danger">${data} <i class="m-l-10 fas fa-flag"></i></label>`
        }
      },
      {
        title: 'Action',
        data: 'status',
        render: (data, row, index) => {
          return 'Terminate Live Session/Live Stream'
        }
      }
      // Live Stream > navifate to perticualar stremer page
    ],
    buttons: [
      // 'excel',
      // 'csv'
    ]

  };

  constructor(
    private http: HttpClient,
    public router: Router,
    private api: ApiService
  ) { }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.componentActive = false;
  }


  view(id) {
    this.api.giftId = id;
    const link = ['/gift/add'];
    this.router.navigate(link);
  }

  add() {
    const link = ['/gift/add'];
    this.router.navigate(link);
  }
}
