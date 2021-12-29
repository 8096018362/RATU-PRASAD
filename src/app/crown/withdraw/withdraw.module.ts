import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WithdrawComponent } from './withdraw.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../theme/shared/shared.module';
import { DataTablesModule } from 'angular-datatables';
import {NgbAccordionModule, NgbCollapseModule} from '@ng-bootstrap/ng-bootstrap';

const routes: Routes = [
  {
    path: '',
    component: WithdrawComponent
  }
];

@NgModule({
  declarations: [WithdrawComponent],
  imports: [
    RouterModule.forChild(routes),
    SharedModule,
    DataTablesModule,
    CommonModule,
    NgbCollapseModule,
    NgbAccordionModule
  ]
})

export class WithdrawModule { }
