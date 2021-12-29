
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from "@angular/common";

const routes: Routes = [
  {
    path: 'views',
    loadChildren: () => import('./view/view.module').then(m => m.NotificationViewModule)
  },
  {
    path: 'add',
    loadChildren: () => import('./add/add.module').then(m => m.NotificationAddModule)
  },
  {
    path: '',
    redirectTo: 'views'
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)

  ]
})
export class NotificationsModule { }
