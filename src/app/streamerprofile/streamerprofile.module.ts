import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'accept',
    loadChildren: () => import('./accept/accept.module').then(m => m.AcceptModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListModule)
  },
  
  {
    path: '',
    redirectTo: 'accept'
  }
];



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class StreamerprofileModule { }
