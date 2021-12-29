import { NgModule } from '@angular/core';
import { PearToRmlListComponent, ConfirmDialog } from './pearlToRM-list';

import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from "@angular/common";
import { SharedModule } from '../../theme/shared/shared.module';
import { DataTablesModule } from 'angular-datatables';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
const routes: Routes = [
    {
        path: '',
        component: PearToRmlListComponent
    }
];


@NgModule({
    declarations: [PearToRmlListComponent, ConfirmDialog],
    imports: [
        RouterModule.forChild(routes)
        , MatSnackBarModule,
        SharedModule,
        DataTablesModule,
        CommonModule,
        MatDialogModule,
        MatButtonModule
    ],
    entryComponents: [ConfirmDialog]
})
export class PearlToRMListModule { }
