import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EarningsetupComponent } from './earningsetup.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../theme/shared/shared.module';
import { DataTablesModule } from 'angular-datatables';

const routes: Routes = [
  {
    path: '',
    component: EarningsetupComponent
  }
];

@NgModule({
  declarations: [EarningsetupComponent],
  imports: [
    RouterModule.forChild(routes),
    SharedModule,
    DataTablesModule,
    CommonModule
  ]
})
export class EarningsetupModule { }
