import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../theme/shared/shared.module';
import { AdminHomeComponent } from './admin-home';
import { Routes, RouterModule } from '@angular/router';
import {ChartModule} from 'angular2-chartjs';

const routes: Routes = [
    {
        path: '',
        component: AdminHomeComponent
    }  
];

@NgModule({
    imports: [ChartModule,
        CommonModule,
        SharedModule,
        RouterModule.forChild(routes),
        
    ],
    declarations: [AdminHomeComponent]
})
export class AdminHomeModule { }

