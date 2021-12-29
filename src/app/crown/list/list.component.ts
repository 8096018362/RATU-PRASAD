import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { takeWhile } from 'rxjs/operators';
import { ApiService } from 'src/app/services/api.service';
import { Crown } from '../crown.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from "src/environments";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
    selector: '',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit, OnDestroy {
    componentActive = true;
    crownsData = [];
    showLoading = false;

    constructor(
        public router: Router,
        private http: HttpClient,
        private api: ApiService,
        public dialog: MatDialog,
        public matSnackBar: MatSnackBar
    ) { }

    private formatJSONData(res) {
        const body = res;
        if (body.success) {
            return body.data
        } else {
            return {}
        }
    }

    crownTableOptions = {
        dom: 'Bfrtip',
        lengthMenu: [[10, 25, 50, -1], [10, 25, 50, "All"]],
        ajax: (data, callback, settings) => {
            const httpOptions = {
                headers: new HttpHeaders({
                  'Content-Type':  'application/json',
                  'x-access-token': sessionStorage.getItem('userToken')
                })
              };
            this.http.get(environment.API_URL + '/api/v1/admin/secure/crowns-list', httpOptions)
                .pipe(
                    map((this.formatJSONData))
                ).subscribe((jsondata) => {
                    callback({ aaData: jsondata == null ? [] : jsondata })
                })
        },

        columns: [
            {
                title: 'Crown Image',
                data: 'image',
                render: (data, row, index, type, meta) => {
                    if (data != null) {
                        return '<div class="media"><img class="rounded-circle" style="width:40px;" src="' + data + '" /></a></div>'
                    } else {
                        return '-'
                    }
                }
            },

            {
                title: 'Crown',
                data: 'count'
            },

            {
                title: 'Crown Value(RM)',
                data: 'value'
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
                    return '<a class="badge badge-light-success badge-pill f-12 mr-2 editor_edit">Edit</a>  <a class="badge badge-light-success badge-pill f-12  editor_view">Delete </a>'
                }
            }

        ],
        buttons: [
            // 'excel',
            // 'csv'
        ],
        rowCallback: (row: Node, data: any | Object, index: number) => {
            $('.editor_edit', row).bind('click', () => {
                this.view(data);
            });

            $('.editor_view', row).bind('click', () => {
                this.delete(data);
            });

        },

    };

    ngOnInit() {

    }

    ngOnDestroy(): void {
        this.componentActive = false;
    }

    view(obj) {
       sessionStorage.setItem('crownObj', JSON.stringify(obj))
        const link = ['/crown/add'];
        this.router.navigate(link);
    }

    delete(obj){
        const dialog = this.dialog.open(ConfirmationDialog, {
            width:'500px'
        })

        dialog.afterClosed().subscribe(result=>{
            if(result){
                this.api.deleteCrown(obj.id).subscribe(response=>{

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

    setCrown() {
        this.api.crownId = '';
        const link = ['/crown/add'];
        this.router.navigate(link);
    }
}


@Component({
    selector: 'delete-dialog',
    templateUrl: './delete.html',
    styleUrls: ['./list.component.scss']
})
export class ConfirmationDialog {
  constructor(public dialogRef: MatDialogRef<ConfirmationDialog>){}
  close(){
      this.dialogRef.close()
  }
  delete(){
    this.dialogRef.close('yes')
  }
}