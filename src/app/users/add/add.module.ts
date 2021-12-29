import { NgModule } from '@angular/core';
import { UsersAddComponent } from './add.component';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from "@angular/common";
import { SharedModule } from '../../theme/shared/shared.module';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';

const routes: Routes = [
    {
        path: '',
        component: UsersAddComponent
    }
];


@NgModule({
    imports: [
        CommonModule,
        NgxIntlTelInputModule,
        SharedModule,
        RouterModule.forChild(routes),
        FormsModule,
        ReactiveFormsModule,
        MatSnackBarModule
    ],
    declarations: [UsersAddComponent]
})
export class UsersAddModule { }
