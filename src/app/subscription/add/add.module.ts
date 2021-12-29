import { SubscriptionAddComponent } from './add.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from "@angular/common";
import { SharedModule } from '../../theme/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: SubscriptionAddComponent
  }
];


@NgModule({
  declarations: [SubscriptionAddComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class SubscriptionAddModule { }
