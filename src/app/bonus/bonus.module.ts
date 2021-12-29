import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'view',
    loadChildren: () => import('./bonuslist/bonuslist.module').then(m => m.BonuslistModule)
  },

  {
    path: '',
    redirectTo: 'view'
  }
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
    ,
    CommonModule
  ]
})
export class BonusModule { }

