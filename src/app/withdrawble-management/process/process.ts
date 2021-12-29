import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
    selector: 'withdrawble-process',
    templateUrl: './process.html',
    styleUrls: ['./process.scss']
})

export class WithdrawbleProcessComponent implements OnInit {
    active = 1;
    showLoading = false;
    private formatJSONData(res) {
        const body = res;
        if (body) {
            return body
        } else {
            return {}
        }
    }

    successfullyProcessedOptions = {
        dom: 'Bfrtip',
        lengthMenu: [[10, 25, 50, -1], [10, 25, 50, "All"]],
        ajax: (data, callback, settings) => {

            this.http.get('')
                .pipe(
                    map((this.formatJSONData))
                ).subscribe((jsondata) => {
                    callback({ aaData: jsondata == null ? [] : jsondata })
                })
        },

        columns: [{
            title: 'Pearl Count',
            data: 'userid',
        },
        {
            title: 'RM Value',
            data: 'name',
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
            data: 'user_type'
        },

        {
            title: 'Full Name',
            data: 'pearl_count',
            render: (data, row, index) => {
                return data != null ? data : 0
            }
        }, {
            title: 'Bank Details',
            data: 'pearl_count',
            render: (data, row, index) => {
                return `<div>
                <div>Name: CIMD</div>
                <div>Acc Num: 12323</div>
                <div>Swift Code:cimd-0909</div>
                </div>`
            }
        },
        {
            title: 'Address',
            data: 'pearl_count',
            render: (data, row, index) => {
                return data != null ? data : 0
            }
        },

        {
            title: 'Email',
            data: 'pearl_count',
            render: (data, row, index) => {
                return data != null ? data : 0
            }
        },

        {
            title: 'Mobile Number',
            data: 'pearl_count',
            render: (data, row, index) => {
                return data != null ? data : 0
            }
        }
            ,

        {
            title: 'Passport/IC number',
            data: 'pearl_count',
            render: (data, row, index) => {
                return data != null ? data : 0
            }
        },
        {
            title: 'Action',
            orderable: false,
            className: 'editcenter',
            render: (data, type, row, meta) => {
                return '<a class="editor_edit">Processed</a>'
            }
        }
        ],
        buttons: [
            // 'excel',
            // 'csv'
        ],
    }

    approveOptions = {
        dom: 'Bfrtip',
        lengthMenu: [[10, 25, 50, -1], [10, 25, 50, "All"]],
        ajax: (data, callback, settings) => {

            this.http.get('http://3.108.79.136:3000/api/v1/withdrawble/agent-withdraw/approved')
                .pipe(
                    map((this.formatJSONData))
                ).subscribe((jsondata) => {
                    callback({ aaData: jsondata == null ? [] : jsondata })
                })
        },

        columns: [{
            title: 'Pearl Count',
            data: 'userid',
        },
        {
            title: 'RM Value',
            data: 'name',
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
            data: 'user_type'
        },

        {
            title: 'Full Name',
            data: 'pearl_count',
            render: (data, row, index) => {
                return data != null ? data : 0
            }
        }, {
            title: 'Bank Details',
            data: 'pearl_count',
            render: (data, row, index) => {
                return `<div>
                <div>Name: CIMD</div>
                <div>Acc Num: 12323</div>
                <div>Swift Code:cimd-0909</div>
                </div>`
            }
        },
        {
            title: 'Address',
            data: 'pearl_count',
            render: (data, row, index) => {
                return data != null ? data : 0
            }
        },

        {
            title: 'Email',
            data: 'pearl_count',
            render: (data, row, index) => {
                return data != null ? data : 0
            }
        },

        {
            title: 'Mobile Number',
            data: 'pearl_count',
            render: (data, row, index) => {
                return data != null ? data : 0
            }
        }
            ,

        {
            title: 'Passport/IC number',
            data: 'pearl_count',
            render: (data, row, index) => {
                return data != null ? data : 0
            }
        },
        {
            title: 'Action',
            orderable: false,
            className: 'editcenter',
            render: (data, type, row, meta) => {
                return '<a class="editor_edit">Process</a>'
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
        },

    };


    rejectOptions = {
        dom: 'Bfrtip',
        lengthMenu: [[10, 25, 50, -1], [10, 25, 50, "All"]],
        ajax: (data, callback, settings) => {

            this.http.get('http://3.108.79.136:3000/api/v1/withdrawble/agent-withdraw/rejected')
                .pipe(
                    map((this.formatJSONData))
                ).subscribe((jsondata) => {
                    callback({ aaData: jsondata == null ? [] : jsondata })
                })
        },

        columns: [{
            title: 'Pearl Count',
            data: 'userid',
        },
        {
            title: 'RM Value',
            data: 'name',
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
            data: 'user_type'
        },

        {
            title: 'Full Name',
            data: 'pearl_count',
            render: (data, row, index) => {
                return data != null ? data : 0
            }
        }, {
            title: 'Bank Details',
            data: 'pearl_count',
            render: (data, row, index) => {
                return `<div>
                <div>Name: CIMD</div>
                <div>Acc Num: 12323</div>
                <div>Swift Code:cimd-0909</div>
                </div>`
            }
        },
        {
            title: 'Address',
            data: 'pearl_count',
            render: (data, row, index) => {
                return data != null ? data : 0
            }
        },

        {
            title: 'Email',
            data: 'pearl_count',
            render: (data, row, index) => {
                return data != null ? data : 0
            }
        },

        {
            title: 'Mobile Number',
            data: 'pearl_count',
            render: (data, row, index) => {
                return data != null ? data : 0
            }
        }
            ,

        {
            title: 'Passport/IC number',
            data: 'pearl_count',
            render: (data, row, index) => {
                return data != null ? data : 0
            }
        },
        {
            title: 'Reason',
            data: 'pearl_count',
            render: (data, row, index) => {
                return 'Invalid Passport Number'
            }
        },
        {
            title: 'Action',
            orderable: false,
            className: 'editcenter',
            render: (data, type, row, meta) => {
                return '<a class="editor_edit">Approve</a>'
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
        },

    };


    queryOptions = {
        dom: 'Bfrtip',
        lengthMenu: [[10, 25, 50, -1], [10, 25, 50, "All"]],
        ajax: (data, callback, settings) => {

            this.http.get('http://3.108.79.136:3000/api/v1/withdrawble/agent-withdraw/query')
                .pipe(
                    map((this.formatJSONData))
                ).subscribe((jsondata) => {
                    callback({ aaData: jsondata == null ? [] : jsondata })
                })
        },

        columns: [{
            title: 'Pearl Count',
            data: 'userid',
        },
        {
            title: 'RM Value',
            data: 'name',
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
            data: 'user_type'
        },

        {
            title: 'Full Name',
            data: 'pearl_count',
            render: (data, row, index) => {
                return data != null ? data : 0
            }
        }, {
            title: 'Bank Details',
            data: 'pearl_count',
            render: (data, row, index) => {
                return `<div>
                <div>Name: CIMD</div>
                <div>Acc Num: 12323</div>
                <div>Swift Code:cimd-0909</div>
                </div>`
            }
        },
        {
            title: 'Address',
            data: 'pearl_count',
            render: (data, row, index) => {
                return data != null ? data : 0
            }
        },

        {
            title: 'Email',
            data: 'pearl_count',
            render: (data, row, index) => {
                return data != null ? data : 0
            }
        },

        {
            title: 'Mobile Number',
            data: 'pearl_count',
            render: (data, row, index) => {
                return data != null ? data : 0
            }
        }
            ,

        {
            title: 'Passport/IC number',
            data: 'pearl_count',
            render: (data, row, index) => {
                return data != null ? data : 0
            }
        },
        {
            title: 'Reason',
            data: 'pearl_count',
            render: (data, row, index) => {
                return 'Invalid Passport Number'
            }
        },
        {
            title: 'Action',
            orderable: false,
            className: 'editcenter',
            render: (data, type, row, meta) => {
                return '<a class="editor_edit">Edit Query</a>'
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
        },

    };




    constructor(
        private http: HttpClient,
        public router: Router
    ) { }



    ngOnInit() {


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