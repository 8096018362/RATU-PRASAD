import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-history',
    templateUrl: './history.component.html',
    styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
    userTableOptions: any = {};

    constructor(
        public router: Router
    ) { }
    ngOnInit() {

        this.userTableOptions = {
            ajax: 'fake-data/videos-data.json',
            columns: [{
                title: 'S.No',
                data: 'id',

            }, {
                title: 'Username',
                data: 'username',
                render: (data, row, index) => {
                    return `<a class="userName">${data}</a>`;
                }
            },
            {
                title: 'Title',
                data: 'title',
                render: (data, row, index) => {
                    return `<a class="videoName">${data}</a>`;
                }
            },
            {
                title: 'Video Type',
                data: 'video_title',
                render: (data, row, index) => {
                    return `<a class="video_class">${data}</a>`;
                }
            },
            {
                title: 'Payment',
                data: 'payment'
            },

            {
                title: 'Streaming Status',
                data: 'is_streaming'
            }, {
                title: 'Streamed At',
                data: 'streamed_At'
            }, {
                title: 'Viewer Count',
                data: 'viewers_count'
            },
            {
                title: 'Action',
                data: 'viewers_count'
            },

            ],
            dom: 'Bfrtip',
            buttons: [
                // 'copy',
                // 'print',
                'excel',
                'csv'
            ],
            rowCallback: (row: Node, data: any | Object, index: number) => {
                $('.userName', row).bind('click', () => {
                    this.gotoUserDetails(data);
                });
                $('.videoName', row).bind('click', () => {
                    this.gotoVideoDetails(data);
                });
            },
        };
    }

    gotoUserDetails(obj) {
        const link = ['/users/view', obj.id];
        this.router.navigate(link);
    }

    gotoVideoDetails(obj) {
        const link = ['/videos/list', obj.id];
        this.router.navigate(link);
    }

    addUser() {
        const link = ['/users/add'];
        this.router.navigate(link);
    }

}
