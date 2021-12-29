import { NgModule } from '@angular/core';
import { UsersStreamersComponent } from './streamers.component';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from "@angular/common";
import { SharedModule } from '../../theme/shared/shared.module';
import { DataTablesModule } from 'angular-datatables';

const routes: Routes = [
    {
        path: '',
        component: UsersStreamersComponent
    }
];
@NgModule({
    imports: [
        DataTablesModule,
        CommonModule,
        SharedModule,
        RouterModule.forChild(routes)
    ],
    declarations: [UsersStreamersComponent]
})
export class UsersStreamersModule { }
