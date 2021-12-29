import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { takeWhile } from "rxjs/operators";
import { ApiService } from "src/app/services/api.service";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { MatDialog, MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {


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

  streamerListTableOptions = {
    dom: 'Bfrtip',
    lengthMenu: [[10, 25, 50, -1], [10, 25, 50, "All"]],
    ajax: (data, callback, settings) => {

      this.http.get('http://3.108.79.136:3000/api/v1/agent/streamer-list/BQkBFzre77ZHk4OjzucJz6rYQ552')
        .pipe(
          map((this.formatJSONData))
        ).subscribe((jsondata) => {
          callback({ aaData: jsondata == null ? [] : jsondata })
        })
    },

    columns: [
      {
        title: 'Agent Id',
        data: 'agentId',
        render: (data, row, index) => {
          return `<a>${data !== null ? data : ''}</a>`;
        }
      },
      {
        title: 'Streamer Id',
        data: 'streamerId',
        // render: (data, row, index) => {
        //   return '-'
        //   //  return `<a>${data !== null ? data : ''}</a>`;
        // }
      },
      {
        title: 'User',
        data: 'name',
        render: (data, row, index) => {
          return `<a>${data !== null ? data : ''}</a>`;
        }
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
        title: 'Action',
        orderable: false,
        className: 'editcenter',
        render: (data, type, row, meta) => {
          return '<a class="badge badge-light-danger badge-pill f-12 mr-2 rejectBtn">Remove</a>'
        }
      }

    ],
    buttons: [
      // 'excel',
      // 'csv'
    ],
    rowCallback: (row: Node, data: any | Object, index: number) => {
      $('.rejectBtn', row).bind('click', () => {
        this.rejectModal(data);
      });


    },

  };

  constructor(
    private http: HttpClient,
    public router: Router,
    private api: ApiService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.componentActive = false;
  }

  rejectModal(obj) {
    const dialog = this.dialog.open(RejectDialog, {
      width: '500px'
    })
    dialog.afterClosed().subscribe(result => {
      console.log('dialog closed')
    })
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



@Component({
  selector: 'reject-dialog',
  templateUrl: './reject.html',
  styleUrls: ['./list.component.scss']
})
export class RejectDialog {
  constructor(public dialogRef: MatDialogRef<RejectDialog>) { }
  close() {
    this.dialogRef.close()
  }
}