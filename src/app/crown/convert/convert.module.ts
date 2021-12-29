import { NgModule } from '@angular/core';
import { ConvertComponent } from './convert.component';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from "@angular/common";
import { SharedModule } from '../../theme/shared/shared.module';
import { DataTablesModule } from 'angular-datatables';

const routes: Routes = [
  {
    path: '',
    component: ConvertComponent
  }
];


@NgModule({
  declarations: [ConvertComponent],
  imports: [
    RouterModule.forChild(routes),
    SharedModule,
    DataTablesModule,
    CommonModule
  ]
})
export class ConvertModule { }
