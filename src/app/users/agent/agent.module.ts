import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgentComponent } from './agent.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../theme/shared/shared.module';
import { DataTablesModule } from 'angular-datatables';

const routes: Routes = [
  {
      path: '',
      component: AgentComponent
  }
];

@NgModule({
  declarations: [AgentComponent],
  imports: [
    DataTablesModule,
        CommonModule,
        SharedModule,
        RouterModule.forChild(routes)
  ]
})
export class AgentModule { }
