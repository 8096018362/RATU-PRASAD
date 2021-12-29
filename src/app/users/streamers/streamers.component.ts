import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
    selector: '',
    templateUrl: './streamers.component.html',
    styleUrls: ['./streamers.component.scss']
})
export class UsersStreamersComponent implements OnInit {
 
    dtExportButtonOptions: any = {};

    constructor(
        public router: Router
    ) { }
    ngOnInit() {

        this.dtExportButtonOptions = {
            ajax: 'fake-data/streamer-data.json',
            columns: [{
                title: 'S.No',
                data: 'id',

            }, {
                title: 'Username',
                data: 'position',
                render: (data, row, index) => {
                    return `<a class="userName">${data}</a>`;
                }
            },
            {
                title: 'User Type',
                data: 'office'
            },
            //  {
            //     title: 'Mobile Number',
            //     data: 'age'
            // },
            // {
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
            // }, 
            {
                title: 'Live Status',
                data: 'age',
                render: (data, row, index) => {
                    if (data > 60) {
                        return 'Yes'
                    } else {
                        return 'No'
                    }
                }
            }, 
            // {
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
                title: 'Wallet Balance',
                data: 'balance',
                // render: (data, row, index) => {
                //     return 'Approved'
                // }
            }, 

            {
                title: 'Withdrawal',
                data: 'withdraw',
                // render: (data, row, index) => {
                //     return 'Approved'
                // }
            }, 

            {
                title: 'Earnings',
                data: 'earnings',
                // render: (data, row, index) => {
                //     return 'Approved'
                // }
            }, 
            
            {
                title: 'Registered On',
                data: 'date'
            },

            ],
            dom: 'Bfrtip',
            buttons: [
                // 'copy',
                // 'print',
                'excel',
                'csv'
            ],
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