import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrownAddComponent } from './add.component';


import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../theme/shared/shared.module';
import { DataTablesModule } from 'angular-datatables';
import { MatSnackBarModule } from '@angular/material/snack-bar';

const routes: Routes = [
  {
    path: '',
    component: CrownAddComponent
  }
];


@NgModule({
  declarations: [CrownAddComponent],
  imports: [
    RouterModule.forChild(routes)
    ,
    SharedModule,
    DataTablesModule,
    CommonModule,
    MatSnackBarModule
  ]
})
export class CrownAddModule { }
