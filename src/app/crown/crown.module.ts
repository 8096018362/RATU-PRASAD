import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from "@angular/common";
import { LoaderModule } from '../theme/shared/components/loader/loader.module';

const routes: Routes = [
  {
    path: 'view',
    loadChildren: () => import('./list/list.module').then(m => m.CrownListModule)
  },
  {
    path: 'add',
    loadChildren: () => import('./add/add.module').then(m => m.CrownAddModule)
  },
  {
    path: 'convert',
    loadChildren: () => import('./convert/convert.module').then(m => m.ConvertModule)
  },
  {
    path: 'crown-to-pearl',
    loadChildren: () => import('./crown-to-pearl-list/crown-to-pearl.module').then(m => m.CrownToPearlListModule)
  },
  {
    path: 'earningsetup',
    loadChildren: () => import('./earningsetup/earningsetup.module').then(m => m.EarningsetupModule)
  },
  {
    path: 'withdraw',
    loadChildren: () => import('./withdraw/withdraw.module').then(m => m.WithdrawModule)
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
export class CrownModule { }
