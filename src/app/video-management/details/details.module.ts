import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../theme/shared/shared.module';
import { DataTablesModule } from 'angular-datatables';

const routes: Routes = [
  {
    path: '',
    component: DetailsComponent
  }
];


@NgModule({
  declarations: [DetailsComponent],
  imports: [
    CommonModule,
    SharedModule,
    DataTablesModule,
    RouterModule.forChild(routes)
  ]
})

export class VideoDetailsModule { }
