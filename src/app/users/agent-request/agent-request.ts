import { Component, Inject, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { ApiService } from "src/app/services/api.service";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
    selector: 'app-agent-request',
    templateUrl: './agent-request.html',
    styleUrls: ['./agent-request.scss']
})

export class AgentRequestComponent implements OnInit {
    active = 1;
    showLoading = false;
    private formatJSONData(res) {

        const body = res.data[0];
        if (body) {
            return body
        } else {
            return {}
        }
    }



    constructor(
        private http: HttpClient,
        public router: Router,
        public dialog: MatDialog,
        public apiService: ApiService,
        public matSnackBar: MatSnackBar
    ) { }


    rejectModal(obj) {
        const dialog = this.dialog.open(RejectDialog, {
            width: '400px'
        })
        dialog.afterClosed().subscribe(result => {
            console.log('dialog closed')
            this.tablesLoad()
            if (result == 'reject') {
                let reqObj = {
                    approval_status: 'reject',
                    id: obj.id
                }
                this.apiService.approveAgent(reqObj).subscribe(res => {
                    if (res['success']) {
                   
                        this.matSnackBar.open('Rejected successfully', 'OK', {
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

    openApproveDialog(obj) {
        const dialog = this.dialog.open(ApproveDialog, {
            width: '400px',
            panelClass: 'actionDialog'
        })
        dialog.afterClosed().subscribe(result => {
            console.log('dialog closed')
            this.tablesLoad()
            if (result == 'approve') {
                let reqObj = {
                    approval_status: 'active',
                    id: obj.id
                }
                this.apiService.approveAgent(reqObj).subscribe(res => {
                    if (res['success']) {
                       
                        this.matSnackBar.open('Approved successfully', 'OK', {
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

    queryModal(obj, type) {
        const dialog = this.dialog.open(QueryDialog, {
            width: '400px',
            data: type
        })
        dialog.afterClosed().subscribe(result => {
            console.log('dialog closed')
            this.tablesLoad()
            if (result == 'approve') {
                if (type == 'deactivate') {
                    let reqObj = {
                        approval_status: 'inactive',
                        id: obj.id
                    }
                    this.apiService.approveAgent(reqObj).subscribe(res => {
                        if (res['success']) {
                            
                            this.matSnackBar.open('Deactivated successfully', 'OK', {
                                panelClass: 'snack-success',
                                duration: 2000,
                                verticalPosition: 'top',
                                horizontalPosition: 'right', //'start' | 'center' | 'end' | 'left' | 'right'
                            })
                        }
                    })
                } else {
                    let reqObj = {
                        approval_status: 'active',
                        id: obj.id
                    }
                    this.apiService.approveAgent(reqObj).subscribe(res => {
                        if (res['success']) {
                            this.tablesLoad()
                            this.matSnackBar.open('Activated successfully', 'OK', {
                                panelClass: 'snack-success',
                                duration: 2000,
                                verticalPosition: 'top',
                                horizontalPosition: 'right', //'start' | 'center' | 'end' | 'left' | 'right'
                            })
                        }
                    })
                }

            }
        })
    }


    ngOnInit() {
        this.tablesLoad();
    }
    public requestOptions;
    public approveOptions;
    public rejectOptions;
    tablesLoad() {
        this.requestOptions = {
            dom: 'Bfrtip',
            lengthMenu: [[10, 25, 50, -1], [10, 25, 50, "All"]],
            ajax: (data, callback, settings) => {

                this.http.get('http://3.108.79.136:3000/api/v1/user/secure/stream-Agentlist/pending')
                    .pipe(
                        map((this.formatJSONData))
                    ).subscribe((jsondata) => {
                        callback({ aaData: jsondata == null ? [] : jsondata })
                    })
            },

            columns: [{
                title: 'Agent Name',
                data: 'id',
            },
            {
                title: 'IC Number',
                data: 'ic_number',
                render: (data, row, index) => {
                    return `<a class="userName">${data !== null ? data : ''}</a>`;
                }
            },
            {
                title: 'User ID',
                data: 'userid',
                render: (data, row, index) => {
                    return `<a class="userName">${data !== null ? data : ''}</a>`;
                }
            },

            {
                title: 'Company Name',
                data: 'company_name',
                render: (data, row, index) => {
                    return `<a class="userName">${data !== null ? data : ''}</a>`;
                }
            }, {
                title: 'Email',
                data: 'email'
            },
            {
                title: 'Mobile Number',
                data: 'mobile'
            },

            {
                title: 'Address',
                data: 'address',
            },

            {
                title: 'Gender',
                data: 'gender'
            }
                ,

            {
                title: 'Country',
                data: 'country',
                render: (data, row, index) => {
                    return data != null ? data : '-'
                }
            },
            {
                title: 'Action',
                orderable: false,
                className: 'editcenter',
                render: (data, type, row, meta) => {
                    return '<a class="badge badge-light-success badge-pill f-12 mr-2 approvebtn">Approve</a> <a class="badge badge-light-danger badge-pill f-12 mr-2 rejectBtn">Reject</a>'
                }
            }
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
                { extend: 'colvis', text: 'More Columns', className: 'moreColumns', },
                // 'excel',
                // 'csv'
            ],
            rowCallback: (row: Node, data: any | Object, index: number) => {
                $('.userName', row).bind('click', () => {
                    this.gotoUserDetails(data);
                });
                $('.approvebtn', row).bind('click', () => {
                    this.openApproveDialog(data);
                });
                $('.rejectBtn', row).bind('click', () => {
                    this.rejectModal(data);
                });
            },

        };

        this.approveOptions = {
            dom: 'Bfrtip',
            lengthMenu: [[10, 25, 50, -1], [10, 25, 50, "All"]],
            ajax: (data, callback, settings) => {

                this.http.get('http://3.108.79.136:3000/api/v1/user/secure/stream-Agentlist/active')
                    .pipe(
                        map((this.formatJSONData))
                    ).subscribe((jsondata) => {
                        callback({ aaData: jsondata == null ? [] : jsondata })
                    })
            },

            columns: [{
                title: 'Agent Name',
                data: 'id',
            },
            {
                title: 'IC Number',
                data: 'ic_number',
                render: (data, row, index) => {
                    return `<a class="userName">${data !== null ? data : ''}</a>`;
                }
            },
            {
                title: 'User ID',
                data: 'userid'
            },

            {
                title: 'Company Name',
                data: 'company_name',
                render: (data, row, index) => {
                    return data != null ? data : 0
                }
            }, {
                title: 'Email',
                data: 'email',
                render: (data, row, index) => {
                    return data != null ? data : 0
                }
            },
            {
                title: 'Mobile Number',
                data: 'mobile',
                render: (data, row, index) => {
                    return data != null ? data : 0
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
                title: 'Gender',
                data: 'gender',
                render: (data, row, index) => {
                    return data != null ? data : 0
                }
            }
                ,

            {
                title: 'Country',
                data: 'country',
                render: (data, row, index) => {
                    return data != null ? data : 0
                }
            },
            {
                title: 'Status',
                data: 'approval_status',
                render: (data, row, index) => {
                    return data != null ? data : 0
                }
            },
            {
                title: 'Action',
                orderable: false,
                className: 'editcenter',
                render: (data, type, row, meta) => {
                    return '<a class="badge badge-light-danger badge-pill f-12 mr-2 deactivate">Deactivate</a>'
                }
            }
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
                { extend: 'colvis', text: 'More Columns', className: 'moreColumns', },
            ],
            rowCallback: (row: Node, data: any | Object, index: number) => {
                $('.userName', row).bind('click', () => {
                    this.gotoUserDetails(data);
                });

                $('.deactivate', row).bind('click', () => {
                    this.queryModal(data, 'deactivate');
                });
            },

        };

        this.rejectOptions = {
            dom: 'Bfrtip',
            lengthMenu: [[10, 25, 50, -1], [10, 25, 50, "All"]],
            ajax: (data, callback, settings) => {

                this.http.get('http://3.108.79.136:3000/api/v1/user/secure/stream-Agentlist/reject')
                    .pipe(
                        map((this.formatJSONData))
                    ).subscribe((jsondata) => {
                        callback({ aaData: jsondata == null ? [] : jsondata })
                    })
            },

            columns: [{
                title: 'Agent Name',
                data: 'id',
            },
            {
                title: 'IC Number',
                data: 'ic_number',
                render: (data, row, index) => {
                    return `<a class="userName">${data !== null ? data : ''}</a>`;
                }
            },
            {
                title: 'User ID',
                data: 'userid'
            },

            {
                title: 'Company Name',
                data: 'company_name',
                render: (data, row, index) => {
                    return data != null ? data : 0
                }
            }, {
                title: 'Email',
                data: 'email',
                render: (data, row, index) => {
                    return data != null ? data : 0
                }
            },
            {
                title: 'Mobile Number',
                data: 'mobile',
                render: (data, row, index) => {
                    return data != null ? data : 0
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
                title: 'Gender',
                data: 'gender',
                render: (data, row, index) => {
                    return data != null ? data : 0
                }
            }
                ,

            {
                title: 'Country',
                data: 'country',
                render: (data, row, index) => {
                    return data != null ? data : 0
                }
            },
            {
                title: 'Status',
                data: 'approval_status',
                render: (data, row, index) => {
                    return data != null ? data : 0
                }
            },
            {
                title: 'Action',
                orderable: false,
                className: 'editcenter',
                render: (data, type, row, meta) => {
                    return '<a class="badge badge-light-success badge-pill f-12 mr-2 activate">Reactivate</a>'
                }
            }
            ],
            buttons: [
                // 'excel',
                // 'csv'
                { extend: 'colvis', text: 'More Columns', className: 'moreColumns', },
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
            rowCallback: (row: Node, data: any | Object, index: number) => {
                $('.userName', row).bind('click', () => {
                    this.gotoUserDetails(data);
                });
                $('.activate', row).bind('click', () => {
                    this.queryModal(data, 'reactivate');
                });
            },

        };

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
    styleUrls: ['./agent-request.scss']
})
export class ApproveDialog {
    constructor(public dialogRef: MatDialogRef<ApproveDialog>) { }
    close() {
        this.dialogRef.close()
    }

    approveAgent() {
        this.dialogRef.close('approve')
    }
}

@Component({
    selector: 'reject-dialog',
    templateUrl: './reject.html',
    styleUrls: ['./agent-request.scss']
})
export class RejectDialog {
    constructor(public dialogRef: MatDialogRef<RejectDialog>) { }
    close() {
        this.dialogRef.close()
    }
    reject() {
        this.dialogRef.close('reject')
    }
}

@Component({
    selector: 'query-dialog',
    templateUrl: './query.html',
    styleUrls: ['./agent-request.scss']
})
export class QueryDialog {
    constructor(public dialogRef: MatDialogRef<QueryDialog>, @Inject(MAT_DIALOG_DATA) public dialogData: any) { }
    close() {
        this.dialogRef.close()
    }
    approveAgent() {
        this.dialogRef.close('approve')
    }
}