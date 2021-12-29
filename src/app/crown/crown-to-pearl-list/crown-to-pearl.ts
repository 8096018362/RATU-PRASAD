import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { takeWhile } from 'rxjs/operators';
import { ApiService } from 'src/app/services/api.service';
import { Crown } from '../crown.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
    selector: '',
    templateUrl: './crown-to-pearl.html',
    // styleUrls: ['./list.component.scss']
})

export class CrownToPearlListComponent implements OnInit, OnDestroy {
    componentActive = true;
    crownsData = [];
    showLoading = false;

    constructor(
        public router: Router,
        private http: HttpClient,
        private api: ApiService
    ) { }

    private formatJSONData(res) {
        const body = res;
        if (body) {
            return body
        } else {
            return {}
        }
    }

    crownToPearlTableOptions = {
        dom: 'Bfrtip',
        lengthMenu: [[10, 25, 50, -1], [10, 25, 50, "All"]],
        ajax: (data, callback, settings) => {

            this.http.get('http://3.108.79.136:3000/crown_to_pearl')
                .pipe(
                    map((this.formatJSONData))
                ).subscribe((jsondata) => {
                    callback({ aaData: jsondata == null ? [] : jsondata })
                })
        },

        columns: [
            {
                title: 'Crown Type',
                data: 'name'
            },

            {
                title: 'Conversion Rate',
                data: 'count'
            },

            {
                title: 'Description',
                data: 'value'
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
                    return '<a class="editor_edit">Edit</a> / <a class="editor_view">Delete </a>'
                }
            }

        ],
        buttons: [
            // 'excel',
            // 'csv'
        ]
    };

    ngOnInit() {
        // this.crownToPearlTableOptions = {
        //     dom: 'Bfrtip',
        //     buttons: [
        //         'excel',
        //         'csv'
        //     ],
        //     pagingType: 'full_numbers',
        //     pageLength: 10,
        //     processing: true
        // };
        // this.showLoading = true;
        // this.api.getCrownsList()
        //     .pipe(takeWhile(() => this.componentActive))
        //     .subscribe((response: Crown[]) => {
        //         this.crownsData = response;
        //         this.showLoading = false;
        //     });
    }

    ngOnDestroy(): void {
        this.componentActive = false;
    }

    view(id: string) {
        this.api.crownId = id;
        const link = ['/crown/add'];
        this.router.navigate(link);
    }

    convert() {
        const link = ['/crown/convert'];
        this.router.navigate(link);
    }
}
