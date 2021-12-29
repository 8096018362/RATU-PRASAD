import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcceptComponent, ApproveDialog, RejectDialog } from './accept.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../theme/shared/shared.module';
import { DataTablesModule } from 'angular-datatables';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';

const routes: Routes = [
  {
    path: '',
    component: AcceptComponent
  }
];

@NgModule({
  declarations: [AcceptComponent, ApproveDialog,
  RejectDialog],
  imports: [
    DataTablesModule,
    SharedModule,
    RouterModule.forChild(routes),
    CommonModule,
    SharedModule,
    MatDialogModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule
  ],
  entryComponents:[ApproveDialog, RejectDialog]
})
export class AcceptModule { }
