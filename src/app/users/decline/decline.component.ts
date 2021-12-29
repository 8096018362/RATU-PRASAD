import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
    selector: '',
    templateUrl: './decline.component.html',
    styleUrls: ['./decline.component.scss']
})

export class UsersDeclineComponent implements OnInit {
   
    dtExportButtonOptions: any = {};

    constructor(
        public router: Router
    ) { }
    ngOnInit() {

        this.dtExportButtonOptions = {
            ajax: 'fake-data/datatable-data.json',
            columns: [{
                title: 'S.No',
                data: 'id',

            }, {
                title: 'Username',
                data: 'position'
            }, 
            // {
            //     title: 'Email',
            //     data: 'office'
            // },
            //  {
            //     title: 'Mobile Number',
            //     data: 'age'
            // },
            //  {
            //     title: 'Verify',
            //     data: 'date',
            //     render: (data, row, index) => {
            //         return 'Verified'
            //     }
            // },

            // {
            //     title: 'Streamer',
            //     data: 'age',
            //     render: (data, row, index) => {
            //         if (data < 60) {
            //             return 'Yes'
            //         } else {
            //             return 'No'
            //         }
            //     }
            // }, {
            //     title: 'Is LoggedIn',
            //     data: 'age',
            //     render: (data, row, index) => {
            //         if (data > 60) {
            //             return 'Yes'
            //         } else {
            //             return 'No'
            //         }
            //     }
            // }, {
            //     title: 'Clear Login',
            //     data: 'date',
            //     render: (data, row, index) => {
            //         return 'clear'
            //     }
            // },
            // {
            //     title: 'Status',
            //     data: 'date',
            //     render: (data, row, index) => {
            //         return 'Approved'
            //     }
            // }, 
            {
                title: 'Action',
                data: 'unblock'
            },

            ],
            // dom: 'Bfrtip',
            // buttons: [
            //     'excel',
            //     'csv'
            // ]
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