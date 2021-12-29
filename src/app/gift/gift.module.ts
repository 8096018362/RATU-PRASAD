import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'view',
    loadChildren: () => import('./list/list.module').then(m => m.GiftListModule)
  },
  {
    path: 'add',
    loadChildren: () => import('./add/add.module').then(m => m.GiftAddModule)
  },
  {
    path: 'edit/:id',
    loadChildren: () => import('./edit/edit.module').then(m => m.GiftEditModule)
  },
  {
    path: 'giftutilize',
    loadChildren: () => import('./giftutilize/giftutilize.module').then(m => m.GiftutilizeModule)
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
export class GiftModule { }
