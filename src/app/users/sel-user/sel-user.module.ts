import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelUserComponent } from './sel-user.component';
import { SharedModule } from '../../theme/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: SelUserComponent
    }
];


@NgModule({
  declarations: [SelUserComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class SelUserModule { }
