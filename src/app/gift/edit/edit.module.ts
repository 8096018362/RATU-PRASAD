import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditComponent } from './edit.component';

import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../theme/shared/shared.module';
import { DataTablesModule } from 'angular-datatables';
import { MatSnackBarModule } from '@angular/material/snack-bar';

const routes: Routes = [
  {
    path: '',
    component: EditComponent
  }
];

@NgModule({
  declarations: [EditComponent],
  imports: [
    RouterModule.forChild(routes)
    ,
    SharedModule,
    DataTablesModule,
    CommonModule,
    MatSnackBarModule
  ]
})
export class GiftEditModule { }
