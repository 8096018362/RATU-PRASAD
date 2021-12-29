import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { takeWhile } from "rxjs/operators";
import { ApiService } from "src/app/services/api.service";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-streamer',
  templateUrl: './streamer.component.html',
  styleUrls: ['./streamer.component.scss']
})
export class StreamerComponent implements OnInit {

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

      this.http.get('http://3.108.79.136:3000/api/v1/agent/agent-transaction')
        .pipe(
          map((this.formatJSONData))
        ).subscribe((jsondata) => {
          callback({ aaData: jsondata == null ? [] : jsondata })
        })
    },

    columns: [

      {
        title: 'Date',
        data: 'last_date',
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
        title: 'STREAMER ID',
        data: 'created_date',
        render: (data, row, index) => {
          return `124565`
        }
      },
      {
        title: 'STREAMER',
        data: 'user_name',
        render: (data, row, index) => {
          // return data['name']
        }
      },
      {
        title: 'TOTAL LIVE SESSIONS',
        data: 'status',
        render: (data, row, index) => {
          return `3`
        }
      },
      {
        title: 'STREAMER PEARLS EARNED (PEARLS & RM)',
        data: 'perals_earnecd',
        // render: (data, row, index) => {
        //   return `5000 Pears | 20 RM`
        // }
      },
      // {
      //   title: 'AGENT PEARLS EARNED (PEARLS & RM)',
      //   data: 'status',
      //   render: (data, row, index) => {
      //     return `6500 Pears | 30 RM`
      //   }
      // }
    ],
    columnDefs: [
      {
          "targets": [4],
          "visible": false,
          "searchable": true
      },
      {
          "targets": [5],
          "visible": false,
          "searchable": true
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
