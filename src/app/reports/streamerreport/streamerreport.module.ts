import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StreamerreportComponent } from './streamerreport.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../theme/shared/shared.module';
import { DataTablesModule } from 'angular-datatables';
// import {SharedModule} from '../../../../theme/shared/shared.module';
import {NgbAccordionModule, NgbCollapseModule} from '@ng-bootstrap/ng-bootstrap';

const routes: Routes = [
  {
    path: '',
    component: StreamerreportComponent
  }
];

@NgModule({
  imports: [
      DataTablesModule,
      CommonModule,
      SharedModule,
      RouterModule.forChild(routes),
      CommonModule,
      SharedModule,
      NgbCollapseModule,
      NgbAccordionModule
  ],
  declarations: [StreamerreportComponent]
})
export class StreamerreportModule {  }
