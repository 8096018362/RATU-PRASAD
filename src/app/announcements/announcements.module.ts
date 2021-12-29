// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';



// @NgModule({
//   declarations: [],
//   imports: [
//     CommonModule
//   ]
// })
// export class AnnouncementsModule { }



import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from "@angular/common";

const routes: Routes = [
  {
    path: 'views',
    loadChildren: () => import('./view/view.module').then(m => m.AnnouncementsViewModule)
  },
  {
    path: 'add',
    loadChildren: () => import('./add/add.module').then(m => m.AnnouncementsAddModule)
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
export class AnnouncementsModule { }
