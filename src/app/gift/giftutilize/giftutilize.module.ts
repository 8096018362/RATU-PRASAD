import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GiftutilizeComponent } from './giftutilize.component';

import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../theme/shared/shared.module';
import { DataTablesModule } from 'angular-datatables';

const routes: Routes = [
  {
    path: '',
    component: GiftutilizeComponent
  }
];


@NgModule({
  declarations: [GiftutilizeComponent],
  imports: [
    RouterModule.forChild(routes),
    SharedModule,
    DataTablesModule,
    CommonModule
  ]
})
export class GiftutilizeModule { }
