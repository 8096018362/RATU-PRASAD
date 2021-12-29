import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgentturnoverComponent } from './agentturnover.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../theme/shared/shared.module';
import { DataTablesModule } from 'angular-datatables';

const routes: Routes = [
  {
    path: '',
    component: AgentturnoverComponent
  }
];


@NgModule({
  declarations: [AgentturnoverComponent],
  imports: [
    DataTablesModule,
    SharedModule,
    RouterModule.forChild(routes),
    CommonModule,
    SharedModule,
  ]
})

export class AgentturnoverModule { }
