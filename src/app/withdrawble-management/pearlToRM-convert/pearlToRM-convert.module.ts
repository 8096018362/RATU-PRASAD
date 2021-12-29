import { NgModule } from '@angular/core';
import { PearlToRMConvertComponent } from './pearlToRM-convert';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from "@angular/common";
import { SharedModule } from '../../theme/shared/shared.module';
import { DataTablesModule } from 'angular-datatables';
import { MatSnackBarModule } from '@angular/material/snack-bar';

const routes: Routes = [
  {
    path: '',
    component: PearlToRMConvertComponent
  }
];


@NgModule({
  declarations: [PearlToRMConvertComponent],
  imports: [
    RouterModule.forChild(routes),
    SharedModule,
    DataTablesModule,
    CommonModule,
    MatSnackBarModule
  ]
})
export class PearlToRmConvertModule { }
