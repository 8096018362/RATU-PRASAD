import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent, RejectDialog } from './list.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../theme/shared/shared.module';
import { DataTablesModule } from 'angular-datatables';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

const routes: Routes = [
  {
    path: '',
    component: ListComponent
  }
];

@NgModule({
  declarations: [ListComponent, RejectDialog],
  imports: [
    DataTablesModule,
    SharedModule,
    RouterModule.forChild(routes),
    CommonModule,
    SharedModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
  ],
  entryComponents:[RejectDialog]
})
export class ListModule { }
