import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { takeWhile } from "rxjs/operators";
import { ApiService } from "src/app/services/api.service";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";


@Component({
  selector: 'app-accept',
  templateUrl: './accept.component.html',
  styleUrls: ['./accept.component.scss']
})
export class AcceptComponent implements OnInit {


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

  private reqObj =  {"status":"accept",
  "agentid":"BQkBFzre77ZHk4OjzucJz6rYQ552",
  "streamerid":"xOyg0KhEbwRQCbq0fwStfbu5fKY2"}

  acceptStreamersTableOptions = {
    dom: 'Bfrtip',
    lengthMenu: [[10, 25, 50, -1], [10, 25, 50, "All"]],
    ajax: (data, callback, settings) => {

      this.http.get('http://3.108.79.136:3000/api/v1/agent/accept-streamer')
        .pipe(
          map((this.formatJSONData))
        ).subscribe((jsondata) => {
          callback({ aaData: jsondata == null ? [] : jsondata })
        })
    },

    columns: [
      {
        title: 'Agent Id',
        data: 'agentId'
      },
      {
        title: 'Streamer Id',
        data: 'streamerId'
      },
      {
        title: 'User',
        data: 'name'
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
          return '<a class="badge badge-light-danger badge-pill f-12 mr-2 rejectBtn">Reject</a><a class="badge badge-light-success badge-pill f-12 mr-2 approveBtn">Approve</a>'
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

      $('.approveBtn', row).bind('click', () => {
        this.approveModal(data);
      });

    },

  };

  constructor(
    private http: HttpClient,
    public router: Router,
    private api: ApiService,
    public dialog: MatDialog,
    public matSnackBar: MatSnackBar
  ) { }

  approveModal(obj) {
    const dialog = this.dialog.open(ApproveDialog, {
      width: '500px',
      panelClass: 'actionDialog'
    })
    dialog.afterClosed().subscribe(result => {
     if(result == 'approve'){
      let reqObj = {
        "status":"accept",
        "agentid":obj.agentId,
        "streamerid":obj.streamerId}

    this.api.acceptRejectStreamer(reqObj).subscribe(res=>{
        if(res['success']){
            this.matSnackBar.open('Accepted successfully', 'OK', {
                panelClass: 'snack-success',
                duration: 2000,
                verticalPosition: 'top',
                horizontalPosition: 'right', //'start' | 'center' | 'end' | 'left' | 'right'
              })
        }
    })
     }
    })
  }

  rejectModal(obj) {
    const dialog = this.dialog.open(RejectDialog, {
      width: '500px'
    })
    dialog.afterClosed().subscribe(result => {
      console.log('dialog closed')
    })
  }

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



@Component({
  selector: 'approve-dialog',
  templateUrl: './approve.html',
  styleUrls: ['./accept.component.scss']
})
export class ApproveDialog {
  constructor(public dialogRef: MatDialogRef<ApproveDialog>) { }
  close() {
    this.dialogRef.close()
  }
  approve(){
    this.dialogRef.close('approve')
  }
}

@Component({
  selector: 'reject-dialog',
  templateUrl: './reject.html',
  styleUrls: ['./accept.component.scss']
})
export class RejectDialog {
  reason;
  constructor(public dialogRef: MatDialogRef<RejectDialog>) { }
  close() {
    this.dialogRef.close()
  }
  submit() {
    console.log(this.reason)
    this.dialogRef.close()
  }
}