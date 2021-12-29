import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { takeWhile } from "rxjs/operators";
import { ApiService } from "src/app/services/api.service";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments';
import { MatSnackBar } from "@angular/material/snack-bar";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";

@Component({
    selector: '',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit {

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

    giftTableOptions = {
        dom: 'Bfrtip',
        lengthMenu: [[10, 25, 50, -1], [10, 25, 50, "All"]],
        ajax: (data, callback, settings) => {
            const httpOptions = {
                headers: new HttpHeaders({
                    'Content-Type': 'application/json',
                    'x-access-token': sessionStorage.getItem('userToken')
                })
            };
            this.http.get(environment.API_URL + '/api/v1/gift/gift-list', httpOptions)
                .pipe(
                    map((this.formatJSONData))
                ).subscribe((jsondata) => {
                    callback({ aaData: jsondata == null ? [] : jsondata })
                })
        },

        columns: [
            {
                title: 'Gift Name',
                data: 'name'
            },
            {
                title: 'Gift Utilization',
                data: ''
            },
            {
                title: 'Crown Value',
                data: 'value',
                render: (data, row, index) => {
                    if (data != null) {
                        return data;
                    } else {
                        return '-'
                    }
                }
            },
            {
                title: 'Conversion Rate',
                data: 'conversion_rate',
                render: (data, row, index) => {
                    if (data != null) {
                        return data;
                    } else {
                        return '-'
                    }
                }
            },
            {
                title: 'ICON',
                data: 'icon',
                render: (data, row, index) => {
                    if (data != null) {
                        return '<div class="media"><img class="rounded-circle" style="width:40px;" src="' + data + '" /></a> </div>';
                    } else {
                        return '-'
                    }
                }
            },
            {
                title: 'IMAGE',
                data: 'gf_img',
                render: (data, row, index) => {
                    if (data != null) {
                        return '<div class="media"><img class="rounded-circle" style="width:40px;" src="' + data + '" /></a> </div>';
                    } else {
                        return '-'
                    }
                }
            },
            {
                title: 'Status',
                data: 'status',
                render: (data, row, index) => {
                    if (data != null) {
                        return data
                    } else {
                        return '-'
                    }
                }
            },
            {
                title: 'Created Date',
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
                title: 'Modified Date',
                data: 'modified_date',
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
                title: 'Action',
                orderable: false,
                className: 'editcenter',
                render: (data, type, row, meta) => {
                    return '<a class="badge badge-light-success badge-pill f-12 mr-2 actionBtn">Edit</a> <a class="badge badge-light-success badge-pill f-12  editor_view">Delete </a>'
                }
            }

        ],

        rowCallback: (row: Node, data: any | Object, index: number) => {
            $('.actionBtn', row).bind('click', () => {
                this.view(data);
            });

            $('.editor_view', row).bind('click', () => {
                this.delete(data);
            });

        },
        buttons: [
           // { extend: 'colvis', text: 'More Columns', className: 'moreColumns', },
        ],
        // columnDefs: [

        //     {
        //         "targets": [7],
        //         "visible": false,
        //         "searchable": true
        //     },
        //     {
        //         "targets": [6],
        //         "visible": false,
        //         "searchable": true
        //     }
        // ],

    };

    constructor(
        private http: HttpClient,
        public router: Router,
        private api: ApiService,
        public matSnackBar: MatSnackBar,
        public dialog: MatDialog
    ) { }

    ngOnInit() {
    }

    ngOnDestroy(): void {
        this.componentActive = false;
    }

    delete(obj) {
        const dialog = this.dialog.open(DeleteDialog, {
            width: '400px'
        })

        dialog.afterClosed().subscribe(result => {
            if (result) {
                this.api.deleteGift(obj.id).subscribe(response => {

                }, err => {
                    if (err.error.status == 401) {
                        this.matSnackBar.open('Session expired. Please Login again', 'OK', {
                            panelClass: 'snack-error',
                            duration: 2000,
                            verticalPosition: 'top'
                        })
                        sessionStorage.clear()
                        const link = ['/auth/signin'];
                        this.router.navigate(link);
                    } else {
                        this.matSnackBar.open(err.error.err, 'OK', {
                            panelClass: 'snack-error',
                            duration: 2000,
                            verticalPosition: 'top'
                        })
                    }
                })
            }
        })
    }


    view(obj) {
        this.api.giftId = obj.id;
        const link = ['/gift/edit/' + obj.id];
        this.router.navigate(link);
    }

    add() {
        const link = ['/gift/add'];
        this.router.navigate(link);
    }
}

@Component({
    selector: 'delete-dialog',
    templateUrl: './delete.html',
    styleUrls: ['./list.component.scss']
})
export class DeleteDialog {
    constructor(public dialogRef: MatDialogRef<DeleteDialog>) { }
    close() {
        this.dialogRef.close()
    }
    delete() {
        this.dialogRef.close('yes')
    }
}