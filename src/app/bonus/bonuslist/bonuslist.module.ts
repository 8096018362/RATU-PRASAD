import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BonuslistComponent } from './bonuslist.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../theme/shared/shared.module';
import { DataTablesModule } from 'angular-datatables';

const routes: Routes = [
  {
    path: '',
    component: BonuslistComponent
  }
];

@NgModule({
  declarations: [BonuslistComponent],
  imports: [
    CommonModule,
    SharedModule,
    DataTablesModule,
    RouterModule.forChild(routes)
  ]
})

export class BonuslistModule { }
