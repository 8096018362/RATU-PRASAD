import { AutomaticComponent } from './automatic.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from "@angular/common";
import { SharedModule } from '../../theme/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: AutomaticComponent
  }
];


@NgModule({
  declarations: [AutomaticComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class SubscriptionAutomaticModule { }
