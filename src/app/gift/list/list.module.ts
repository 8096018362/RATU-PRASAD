import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent, DeleteDialog } from './list.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../theme/shared/shared.module';
import { DataTablesModule } from 'angular-datatables';
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';

const routes: Routes = [
  {
    path: '',
    component: ListComponent
  }
];

@NgModule({
  declarations: [ListComponent, DeleteDialog],
  imports: [
    RouterModule.forChild(routes)
    ,
    SharedModule,
    DataTablesModule,
    CommonModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatSnackBarModule,
    MatDialogModule,
    MatButtonModule
  ],
  entryComponents:[DeleteDialog]
})
export class GiftListModule { }