import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'streamerreport',
    loadChildren: () => import('./streamerreport/streamerreport.module').then(m => m.StreamerreportModule)
  },
  {
    path: 'viewer',
    loadChildren: () => import('./viewer/viewer.module').then(m => m.ViewerModule)
  },
  {
    path: '',
    redirectTo: 'streamerreport'
  }
];
@NgModule({
  imports: [
      CommonModule,
      RouterModule.forChild(routes),
      
  ],
  declarations: []
})
export class ReportsModule { }
