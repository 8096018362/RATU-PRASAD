import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgentRequestComponent,
    ApproveDialog,
    RejectDialog,
    QueryDialog } from './agent-request';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../theme/shared/shared.module';
import { DataTablesModule } from 'angular-datatables';
import  { MatDialogModule } from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button'
import { MatSnackBarModule } from '@angular/material/snack-bar';


const routes: Routes = [
    {
        path: '',
        component: AgentRequestComponent
    }
];

@NgModule({
    declarations: [AgentRequestComponent,
        ApproveDialog,
        RejectDialog,
        QueryDialog
    ],
    imports: [
        DataTablesModule,
        CommonModule,
        SharedModule,
        RouterModule.forChild(routes),
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatSnackBarModule
    ],
    entryComponents : [
        ApproveDialog,
        RejectDialog,
        QueryDialog 
    ]
})
export class AgentRequestModule { }
