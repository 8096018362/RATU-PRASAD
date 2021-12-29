import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../theme/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: AddComponent
  }
];



@NgModule({
  declarations: [AddComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})

export class AnnouncementsAddModule { }
