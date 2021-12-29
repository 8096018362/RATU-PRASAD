import { NgModule } from '@angular/core';
import { ViewComponent } from './view.component';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from "@angular/common";
import { SharedModule } from '../../theme/shared/shared.module';
import { DataTablesModule } from 'angular-datatables';

import {HttpClientModule} from '@angular/common/http';
const routes: Routes = [
  {
    path: '',
    component: ViewComponent
  }
];


@NgModule({
  declarations: [ViewComponent],
  imports: [
    HttpClientModule,
    DataTablesModule,
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class NotificationViewModule { }
