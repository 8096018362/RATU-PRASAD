import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments';

@Component({
    selector: '',
    templateUrl: './view.component.html',
    styleUrls: ['./view.component.scss']
})

export class UsersViewComponent implements OnInit {
    showLoading = false;
    private userDetailsData(res) {
        const body = res;
        if (body.success) {
            return body.data
        } else {
            return {}
        }
    }


    userTableOptions = {
        dom: 'Bfrtip',
        lengthMenu: [[10, 25, 50, -1], [10, 25, 50, "All"]],
        ajax: (data, callback, settings) => {
            const httpOptions = {
                headers: new HttpHeaders({
                    'Content-Type': 'application/json',
                    'x-access-token': sessionStorage.getItem('userToken')
                })
            };
            this.http.get(environment.API_URL + '/api/v1/admin/secure/users-list', httpOptions)
                .pipe(
                    map((this.userDetailsData))
                ).subscribe((jsondata) => {
                    callback({ aaData: jsondata == null ? [] : jsondata })
                })
        },

        columns: [
            {
                title: 'Profile',
                data: 'profile_pic',
                render: (data, row, index) => {
                    if (data != null) {
                        return '<div class="media"><img class="rounded-circle" style="width:40px;" src="' + data + '" /></a></div>'
                    } else {
                        return '-'
                    }
                }
            },
            {
                title: 'Username',
                data: 'name',
                render: (data, row, index) => {
                    return `<a class="userName">${data !== null ? data : ''}</a>`;
                }
            },
            {
                title: 'User ID',
                data: 'uid',
            },
            {
                title: 'User Type',
                data: 'user_type'
            },

            {
                title: 'Duration of the Session',
                data: 'pearl_count',
                render: (data, row, index) => {
                    // return data != null ? data : 0
                    return '-'
                }
            },
            {
                title: 'Crowns Purchased',
                data: 'purchasedCrowns',
                render: (data, row, index) => {
                    return data != null ? data : 0
                }
            },
            {
                title: 'Gifts Received',
                data: 'giftsReceived',
                render: (data, row, index) => {
                    return data != null ? data : 0
                }
            },

            {
                title: 'Pearls Earned',
                data: 'pearlsEarned',
                render: (data, row, index) => {
                    return data != null ? data : 0
                }
            }
            , {
                title: 'Action',
                orderable: false,
                className: 'editcenter',
                render: (data, type, row, meta) => {
                    return '<a class="badge badge-light-success badge-pill f-12 mr-2 actionBtn">Edit</a>'
                }
            }

        ],
        buttons: [
            //{ extend: 'colvis', text: 'More Columns', className: 'moreColumns', },
        ],
        // columnDefs: [
        //     {
        //         "targets": [4],
        //         "visible": false,
        //         "searchable": true
        //     },
        //     {
        //         "targets": [5],
        //         "visible": false,
        //         "searchable": true
        //     }
        //  ],
        rowCallback: (row: Node, data: any | Object, index: number) => {
            $('.userName', row).bind('click', () => {
                sessionStorage.setItem('selUser', JSON.stringify(data))
                this.gotoUserDetails(data);
            });
            $('.actionBtn', row).bind('click', () => {
                sessionStorage.setItem('selUser', JSON.stringify(data))
                this.view(data);
            });
        },

    };


    constructor(
        private http: HttpClient,
        public router: Router
    ) { }

    view(obj) {
        const link = ['/users/add'];
        this.router.navigate(link);
    }

    ngOnInit() {


    }

    gotoUserDetails(obj) {
        // const link = ['/users/view', obj.uid];
        const link = ['/users/view', '1111212'];
        this.router.navigate(link);
    }

    addUser() {
        const link = ['/users/add'];
        this.router.navigate(link);
    }
}