import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewComponent } from './view.component';

import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../theme/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: ViewComponent
  }
];

@NgModule({
  declarations: [ViewComponent],
  imports: [
    RouterModule.forChild(routes),
    SharedModule,
    CommonModule
  ]
})
export class SubscriptionViewModule { }
