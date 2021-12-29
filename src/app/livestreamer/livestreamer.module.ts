import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LivestreamerComponent } from './livestreamer.component';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '../theme/shared/shared.module';
import { DataTablesModule } from 'angular-datatables';

const routes: Routes = [
  {
    path: 'livestreamer',
    component: LivestreamerComponent,
  },

  {
    path: '',
    redirectTo: 'livestreamer'
  }
];



@NgModule({
  declarations: [LivestreamerComponent],
  imports: [DataTablesModule,
    SharedModule,
    CommonModule,
    RouterModule.forChild(routes)

  ]
})
export class LivestreamerModule { }
