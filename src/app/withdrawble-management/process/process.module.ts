import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WithdrawbleProcessComponent } from './process';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../theme/shared/shared.module';
import { DataTablesModule } from 'angular-datatables';

const routes: Routes = [
    {
        path: '',
        component: WithdrawbleProcessComponent
    }
];

@NgModule({
    declarations: [WithdrawbleProcessComponent],
    imports: [
        DataTablesModule,
        CommonModule,
        SharedModule,
        RouterModule.forChild(routes)
    ]
})
export class withdrableProcessModule { }
