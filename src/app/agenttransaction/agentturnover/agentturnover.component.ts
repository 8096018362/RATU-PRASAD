import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { takeWhile } from "rxjs/operators";
import { ApiService } from "src/app/services/api.service";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-agentturnover',
  templateUrl: './agentturnover.component.html',
  styleUrls: ['./agentturnover.component.scss']
})
export class AgentturnoverComponent implements OnInit {

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

  acceptStreamersTableOptions = {
    dom: 'Bfrtip',
    lengthMenu: [[10, 25, 50, -1], [10, 25, 50, "All"]],
    ajax: (data, callback, settings) => {

      this.http.get('http://3.108.79.136:3000/api/v1/agent/agent-turnover/BQkBFzre77ZHk4OjzucJz6rYQ552')
        .pipe(
          map((this.formatJSONData))
        ).subscribe((jsondata) => {
          callback({ aaData: jsondata == null ? [] : jsondata })
        })
    },
    columns: [
      {
        title: 'Date',
        data: 'ended_at',
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
            return `${dd}-${mm}-${yyyy}`;
          } else {
            return '-'
          }
        }
      },
      {
        title: 'TOTAL SESSIONS',
        data: 'session_data',
        render: (data, row, index) => {
          return `<a>${data !== null ? data?.length : 0}</a>`;
        }
      },
      {
        title: 'TOTAL AGENT PEARLS EARNED',
        data: 'earned_pearls',
        render: (data, row, index) => {
          return `<a>${data !== null ? data : ''}</a>`;
        }
      },

      {
        title: 'TOTAL RM EARNED',
        data: 'wallet',
        render: (data, row, index) => {
          return `<a>${data !== null ? data : ''}</a>`;
        }
      },
      {
        title: 'AGENCY WITHDRAWAL',
        data: 'wallet',
        render: (data, row, index) => {
          return `<a>${data !== null ? data : ''}</a>`;
        }
      },
      {
        title: 'AGENCY WALLET BALANCE',
        data: 'wallet',
        render: (data, row, index) => {
          return `<a>${data !== null ? data : ''}</a>`;
        }
      }
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
