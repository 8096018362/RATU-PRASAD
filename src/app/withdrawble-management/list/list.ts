
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';


@Component({
    selector: 'withdrawble-list',
    templateUrl: './list.html',
    styleUrls: ['./list.scss']
})

export class WithdrawbleListComponent implements OnInit {
    active = 1;
    showLoading = false;
    private formatJSONData(res) {
        const body = res.data;
        if (body) {
            return body
        } else {
            return {}
        }
    }


    withdrawableOptions = {
        dom: 'Bfrtip',
        lengthMenu: [[10, 25, 50, -1], [10, 25, 50, "All"]],
        ajax: (data, callback, settings) => {

            this.http.get('http://3.108.79.136:3000/api/v1/withdrawble/agent-withdraw/pending')
                .pipe(
                    map((this.formatJSONData))
                ).subscribe((jsondata) => {
                    console.log(jsondata)
                    callback({ aaData: jsondata == null ? [] : jsondata })
                })
        },

        columns: [{
            title: 'Pearl Count',
            data: 'userid',
        },
        {
            title: 'RM Value',
            data: '-',
            render: (data, row, index) => {
                return `<a class="userName">${data !== null ? data : ''}</a>`;
            }
        },
        {
            title: 'Withdrawble Wallet Balance',
            data: 'user_type'
        },
        {
            title: 'Amount',
            data: 'amount'
        },

        {
            title: 'Full Name',
            data: 'fullname',
            render: (data, row, index) => {
                return data != null ? data : 0
            }
        }, {
            title: 'Bank Details',
            data: null,
            render: (data, row, index) => {
                //console.log(data)
                return `<div>
                <div>Name: ${data.bankname}</div>
                <div>Acc Num: ${data.accountnumber}</div>
                <div>Swift Code:${data.swiftcode}</div>
                </div>`
            }
        },
        {
            title: 'Address',
            data: 'address',
            render: (data, row, index) => {
                return data != null ? data : 0
            }
        },

        {
            title: 'Email',
            data: 'email',
            render: (data, row, index) => {
                return data != null ? data : 0
            }
        },

        {
            title: 'Mobile Number',
            data: 'phonenumber',
            render: (data, row, index) => {
                return data != null ? data : 0
            }
        }
            ,

        {
            title: 'Passport/IC number',
            data: 'passportnumber',
            render: (data, row, index) => {
                return data != null ? data : 0
            }
        },
        {
            title: 'Action',
            orderable: false,
            className: 'editcenter',
            render: (data, type, row, meta) => {
                return '<a class="approve badge badge-light-success badge-pill f-12 mr-2">Approve</a><a class="reject badge badge-light-danger badge-pill f-12 mr-2">Reject</a>          <a class="editor_view badge badge-light-warning badge-pill f-12 mr-2">Query</a>'
            }


        }
        ],
        buttons: [
            // 'excel',
            // 'csv'
        ],
        rowCallback: (row: Node, data: any | Object, index: number) => {
            $('.userName', row).bind('click', () => {
                this.gotoUserDetails(data);
            });
            $('.editor_view', row).bind('click', () => {
                this.queryModal(data);
            });
            $('.reject', row).bind('click', () => {
                this.rejectModal(data);
            });
            $('.approve', row).bind('click', () => {
                this.approveModal(data);
            });
        },

    };


    constructor(
        private http: HttpClient,
        public router: Router,
        public dialog: MatDialog

    ) { }



    ngOnInit() {


    }

    approveModal(obj) {
        const dialog = this.dialog.open(ApproveDialog, {
            width: '400px',
            panelClass: 'actionDialog'
        })
        dialog.afterClosed().subscribe(result => {
            console.log('dialog closed')
        })
    }

    rejectModal(obj) {
        const dialog = this.dialog.open(RejectDialog, {
            width: '400px'
        })
        dialog.afterClosed().subscribe(result => {
            console.log(result)
            console.log('dialog closed')
        })
    }

    queryModal(obj) {
        const dialog = this.dialog.open(QueryDialog, {
            width: '400px'
        })
        dialog.afterClosed().subscribe(result => {
            console.log('dialog closed')
        })
    }

    gotoUserDetails(obj) {
        const link = ['/users/view', obj.id];
        this.router.navigate(link);
    }

    addUser() {
        const link = ['/users/add'];
        this.router.navigate(link);
    }
}



@Component({
    selector: 'approve-dialog',
    templateUrl: './approve.html',
    styleUrls: ['./list.scss']
})
export class ApproveDialog {
    constructor(public dialogRef: MatDialogRef<ApproveDialog>) { }
    close() {
        this.dialogRef.close()
    }
}

@Component({
    selector: 'reject-dialog',
    templateUrl: './reject.html',
    styleUrls: ['./list.scss']
})
export class RejectDialog {
    reason;
    constructor(public dialogRef: MatDialogRef<RejectDialog>) { }
    close() {
        this.dialogRef.close()
    }
    submit() {
        this.dialogRef.close(this.reason)
    }
}

@Component({
    selector: 'query-dialog',
    templateUrl: './query.html',
    styleUrls: ['./list.scss']
})
export class QueryDialog {
    reason;
    constructor(public dialogRef: MatDialogRef<QueryDialog>) { }
    close() {
        this.dialogRef.close()
    }
    submit() {
        console.log(this.reason)
        this.dialogRef.close()
    }
}