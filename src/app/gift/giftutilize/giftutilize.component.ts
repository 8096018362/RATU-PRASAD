import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { takeWhile } from "rxjs/operators";
import { ApiService } from "src/app/services/api.service";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-giftutilize',
  templateUrl: './giftutilize.component.html',
  styleUrls: ['./giftutilize.component.scss']
})
export class GiftutilizeComponent implements OnInit {

  componentActive = true;
  giftsData = [];
  showLoading = false;
  private formatJSONData(res) {
    const body = res.data[0];
    if (body) {
      return body
    } else {
      return {}
    }
  }

  utilizationTableOptions = {
    dom: 'Bfrtip',
    lengthMenu: [[10, 25, 50, -1], [10, 25, 50, "All"]],
    ajax: (data, callback, settings) => {

      this.http.get('http://3.108.79.136:3000/api/v1/gift/gift-utilization/acb7f015-8b55-42ac-9ea9-915144dd5142')
        .pipe(
          map((this.formatJSONData))
        ).subscribe((jsondata) => {
          callback({ aaData: jsondata == null ? [] : jsondata })
        })
    },

    columns: [
      {
        title: 'Date',
        data: 'created_date',
        render: (data, row, index) => {
          if (data != null) {
            const date = new Date(data)
            let dd: any = date.getDate();
            let mm: any = date.getMonth() + 1;
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
        title: 'Name',
        data: 'name'
      },
      {
        title: 'UTILIZATION (CROWNS)',
        data: 'added_by'
      },
      {
        title: 'IMAGE',
        data: 'icon',
        render: (data, row, index) => {
          if (data != null) {
            return '<img src="assets/images/gifts/Champagne.png" alt class="img-fluid"         style="max-width: 50px;">';
          } else {
            return '-'
          }
        }
      },
      {
        title: 'UTILIZATION IN PEARLS',
        data: 'status',
        render: (data, row, index) => {
          return 2500000
        }
      },
      {
        title: 'SINGLE',
        data: 'status',
        render: (data, row, index) => {
          return 250
        }
      },
      {
        title: 'MULTIPLE',
        data: 'status',
        render: (data, row, index) => {
          return 333
        }
      },
      {
        title: 'STATUS',
        data: 'status',
        render: (data, row, index) => {
          return '<label class="" style="color:#9ccc65">Active</label>'
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
