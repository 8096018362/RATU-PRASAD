import { NgModule } from '@angular/core';
import { ListComponent, ConfirmationDialog } from './list.component';

import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from "@angular/common";
import { SharedModule } from '../../theme/shared/shared.module';
import { DataTablesModule } from 'angular-datatables';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';

const routes: Routes = [
  {
    path: '',
    component: ListComponent
  }
];


@NgModule({
  declarations: [ListComponent, ConfirmationDialog],
  imports: [
    RouterModule.forChild(routes)
    ,
    SharedModule,
    DataTablesModule,
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatSnackBarModule
  ],
  entryComponents:[ConfirmationDialog]
})
export class CrownListModule { }
