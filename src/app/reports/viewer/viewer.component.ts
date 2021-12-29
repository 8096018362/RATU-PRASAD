import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.scss']
})
export class ViewerComponent implements OnInit {

  dtExportButtonOptions: any = {};
  public isCollapsed: boolean;
  public multiCollapsed1: boolean;
  public multiCollapsed2: boolean;
  
  constructor(
    public router: Router,
    public appService: ApiService
) { }

  ngOnInit(): void {
    this.isCollapsed = true;
    this.multiCollapsed1 = true;
    this.multiCollapsed2 = true;
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

  getViewerReports(){
      this.appService.getViewerReports().subscribe(res=>{
          
      })
  }


}
