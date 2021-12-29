import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.scss']
})
export class AgentComponent implements OnInit {
  userTableOptions: any = {};

    constructor(
    public router: Router
    ) { }
    ngOnInit() {

        this.userTableOptions = {
            ajax: 'fake-data/agent-data.json',
            columns: [{
                title: 'S.No',
                data: 'id',
            }, 
            {
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
            {
                title: 'Total Streamers',
                data: 'age'
            },

            {
                title: 'Wallet Balance',
                data: 'balance',
            }, 

            {
                title: 'Withdrawal',
                data: 'withdraw',
            }, 

            {
                title: 'Earnings',
                data: 'earnings',
            }, 
            
            {
                title: 'Registered On',
                data: 'date'
            },

            ],
            // dom: 'Bfrtip',
            // buttons: [
            //     'excel',
            //     'csv'
            // ],
        };
    }
    gotoUserDetails(obj) {
        const link = ['/agent/view', obj.id];
        this.router.navigate(link);
    }
}