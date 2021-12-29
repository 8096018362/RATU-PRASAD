import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { takeWhile } from 'rxjs/operators';
import { ApiService } from 'src/app/services/api.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
    selector: '',
    templateUrl: './pearlToRM-list.html',
    // styleUrls: ['./list.component.scss']
})

export class PearToRmlListComponent implements OnInit, OnDestroy {
    componentActive = true;
    crownsData = [];
    showLoading = false;

    constructor(
        public router: Router,
        private http: HttpClient,
        private api: ApiService,
        public matSnackBar: MatSnackBar,
        public dialog: MatDialog
    ) { }

    private formatJSONData(res) {
        const body = res;
        if (body) {
            return body
        } else {
            return {}
        }
    }

    pearlToRMTableOptions = {
        dom: 'Bfrtip',
        lengthMenu: [[10, 25, 50, -1], [10, 25, 50, "All"]],
        ajax: (data, callback, settings) => {

            this.http.get('http://3.108.79.136:3000/pearl_to_money')
                .pipe(
                    map((this.formatJSONData))
                ).subscribe((jsondata) => {
                    callback({ aaData: jsondata == null ? [] : jsondata })
                })
        },

        columns: [
            {
                title: 'Pearl Type',
                data: 'pearl_type'
            },

            {
                title: 'Conversion Rate',
                data: 'conversion_rate'
            },

            {
                title: 'Description',
                data: 'description'
            },

            {
                title: 'Status',
                data: 'status'
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
            }
            ,
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
                    return '<a class="editor_edit badge badge-light-success badge-pill f-12 mr-2 actionBtn">Edit</a> <a class="editor_view badge badge-light-danger badge-pill f-12 mr-2 actionBtn">Delete</a>'
                }
            }

        ],
        buttons: [
            // 'excel',
            // 'csv'
        ],
        rowCallback: (row: Node, data: any | Object, index: number) => {

            $('.editor_edit', row).bind('click', () => {
                sessionStorage.setItem('selPearl', JSON.stringify(data))
                this.view(data);
            });

            $('.editor_view', row).bind('click', () => {
                this.delete(data);
            });
        },
    };

    view(obj) {
        const link = ['/withdrawable/pearl-rm-convert'];
        this.router.navigate(link);
    }

    ngOnInit() {

    }

    ngOnDestroy(): void {
        this.componentActive = false;
    }

    delete(obj) {
        const dialog = this.dialog.open(ConfirmDialog, {
            width: '400px'
        })

        dialog.afterClosed().subscribe(result => {
            if (result) {
                this.api.deleteCrown(obj.id).subscribe(response => {

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

    convert() {
        const link = ['/withdrawable/pearl-rm-convert'];
        this.router.navigate(link);
    }
}




@Component({
    selector: 'delete-dialog',
    templateUrl: './delete.html',
    styleUrls: ['../list/list.scss']
})
export class ConfirmDialog {
    constructor(public dialogRef: MatDialogRef<ConfirmDialog>) { }
    close() {
        this.dialogRef.close()
    }
    delete() {
        this.dialogRef.close('yes')
    }
}