import { NgModule } from '@angular/core';
import { AgentwithdrawComponent } from './agentwithdraw.component';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from "@angular/common";
import { SharedModule } from '../theme/shared/shared.module';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';

const routes: Routes = [
  {
    path: 'agentwithdraw',
    component: AgentwithdrawComponent,
  },

  {
    path: '',
    redirectTo: 'agentwithdraw'
  }
];



@NgModule({
  declarations: [AgentwithdrawComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    NgxIntlTelInputModule

  ]
})
export class AgentwithdrawModule { }
