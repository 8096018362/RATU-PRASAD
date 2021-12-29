import { NgModule } from '@angular/core';
import { CrownToPearlListComponent } from './crown-to-pearl';

import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from "@angular/common";
import { SharedModule } from '../../theme/shared/shared.module';
import { DataTablesModule } from 'angular-datatables';

const routes: Routes = [
  {
    path: '',
    component: CrownToPearlListComponent
  }
];


@NgModule({
  declarations: [CrownToPearlListComponent],
  imports: [
    RouterModule.forChild(routes)
    ,
    SharedModule,
    DataTablesModule,
    CommonModule
  ]
})
export class CrownToPearlListModule { }
