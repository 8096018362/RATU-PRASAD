import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../theme/shared/shared.module';
import { DataTablesModule } from 'angular-datatables';

const routes: Routes = [
  {
    path: '',
    component: ListComponent
  }
];

@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    SharedModule,
    DataTablesModule,
    RouterModule.forChild(routes)
  ]
})

export class VideosListModule { }
