// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { CancelledComponent } from './cancelled.component';



// @NgModule({
//   declarations: [CancelledComponent],
//   imports: [
//     CommonModule
//   ]
// })
// export class SubscriptionCancelledModule { }


import {  SubscriptionCancelledComponent } from './cancelled.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from "@angular/common";
import { SharedModule } from '../../theme/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: SubscriptionCancelledComponent
  }
];


@NgModule({
  declarations: [SubscriptionCancelledComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class SubscriptionCancelledModule { }
