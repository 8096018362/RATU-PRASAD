import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../theme/shared/shared.module';
import { AdminProfileComponent } from './admin-profile';
import { Routes, RouterModule } from '@angular/router';
import { NgbTabsetModule } from '@ng-bootstrap/ng-bootstrap';

const routes: Routes = [
    {
        path: '',
        component: AdminProfileComponent
    }
];

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        NgbTabsetModule,
        RouterModule.forChild(routes),

    ],
    declarations: [AdminProfileComponent]
})
export class AdminProfileModule { }

