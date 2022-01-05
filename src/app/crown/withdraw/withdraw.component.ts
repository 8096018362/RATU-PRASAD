import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.scss']
})
export class WithdrawComponent implements OnInit {

  public isCollapsed: boolean;
  public multiCollapsed1: boolean;
  public multiCollapsed2: boolean;

  constructor(public appService: ApiService) { }

  ngOnInit(): void {
    this.isCollapsed = true;
    this.multiCollapsed1 = true;
    this.multiCollapsed2 = true;
    this.getTurnoverReport()
  }

  public turnOverReport: any = {


  }


  getTurnoverReport() {
    this.appService.getTurnoverReport().subscribe((res: any) => {

      //this.turnOverReport = res.data;
    })
  }

  getPurchased(obj) {
    let amount = 0;
    this.turnOverReport.transactionList.map((trans) => {
      if (trans.id == obj.session_id) {
        amount += trans.amount ? trans.amount : 0
      }
    })
    return amount + ' RM';
  }

  getWithdraw(obj) {
    let amount = 0;
    this.turnOverReport.withdrawList.map((trans) => {
      if (trans.id == obj.session_id) {
        amount += trans.amount ? trans.amount : 0
      }
    })
    return amount + ' RM';
  }


}
