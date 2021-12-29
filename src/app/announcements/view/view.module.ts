import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewComponent } from './view.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../theme/shared/shared.module';
import { DataTablesModule } from 'angular-datatables';

const routes: Routes = [
  {
    path: '',
    component: ViewComponent
  }
];



@NgModule({
  declarations: [ViewComponent],
  imports: [ 
    CommonModule,
    SharedModule,
    DataTablesModule,
    RouterModule.forChild(routes)
  ]
})
export class AnnouncementsViewModule { }
