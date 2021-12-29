import { NgModule } from '@angular/core';
import { UsersDeclineComponent } from './decline.component';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from "@angular/common";
import { SharedModule } from '../../theme/shared/shared.module';
import { DataTablesModule } from 'angular-datatables';

const routes: Routes = [
    {
        path: '',
        component: UsersDeclineComponent
    }
];


@NgModule({
    imports: [
        CommonModule,
        DataTablesModule,
        SharedModule,
        RouterModule.forChild(routes)
    ],
    declarations: [UsersDeclineComponent]
})
export class UsersDeclineModule { }
