import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgenttransactionComponent } from './agenttransaction.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'agentturnover',
    loadChildren: () => import('./agentturnover/agentturnover.module').then(m => m.AgentturnoverModule)
  },
  {
    path: 'streamer',
    loadChildren: () => import('./streamer/streamer.module').then(m => m.StreamerModule)
  },
  
  {
    path: '',
    redirectTo: 'streamer'
  }
];




@NgModule({
  declarations: [AgenttransactionComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class AgenttransactionModule { }
