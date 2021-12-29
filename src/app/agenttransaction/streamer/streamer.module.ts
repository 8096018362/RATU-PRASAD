import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StreamerComponent } from './streamer.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../theme/shared/shared.module';
import { DataTablesModule } from 'angular-datatables';

const routes: Routes = [
  {
    path: '',
    component: StreamerComponent
  }
];



@NgModule({
  declarations: [StreamerComponent],
  imports: [
    DataTablesModule,
    SharedModule,
    RouterModule.forChild(routes),
    CommonModule,
    SharedModule,
  ]
})
export class StreamerModule { }
