import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewerComponent } from './viewer.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../theme/shared/shared.module';
import { DataTablesModule } from 'angular-datatables';
// import {SharedModule} from '../../../../theme/shared/shared.module';
import {NgbAccordionModule, NgbCollapseModule} from '@ng-bootstrap/ng-bootstrap';

const routes: Routes = [
  {
    path: '',
    component: ViewerComponent
  }
];

@NgModule({
  declarations: [ViewerComponent],
  imports: [
    DataTablesModule,
      CommonModule,
      SharedModule,
      RouterModule.forChild(routes),
      CommonModule,
      SharedModule,
      NgbCollapseModule,
      NgbAccordionModule
  ]
})
export class ViewerModule { }
