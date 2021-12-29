import { NgModule } from '@angular/core';
import { UsersViewComponent } from './view.component';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from "@angular/common";
import { SharedModule } from '../../theme/shared/shared.module';
import { DataTablesModule } from 'angular-datatables';

const routes: Routes = [
    {
        path: '',
        component: UsersViewComponent
    }
];


@NgModule({
    imports: [
        DataTablesModule,
        CommonModule,
        SharedModule,
        RouterModule.forChild(routes)
    ],
    declarations: [UsersViewComponent]
})
export class UsersViewModule { }
