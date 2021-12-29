import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApproveDialog, QueryDialog, RejectDialog, WithdrawbleListComponent } from './list';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../theme/shared/shared.module';
import { DataTablesModule } from 'angular-datatables';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
    {
        path: '',
        component: WithdrawbleListComponent
    }
];

@NgModule({
    declarations: [WithdrawbleListComponent, ApproveDialog, RejectDialog, QueryDialog],
    imports: [
        MatButtonModule,
        DataTablesModule,
        CommonModule,
        SharedModule,
        MatDialogModule,
        RouterModule.forChild(routes),
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        ReactiveFormsModule
    ],
    entryComponents: [ApproveDialog, RejectDialog, QueryDialog]
})
export class withdrableListModule { }
