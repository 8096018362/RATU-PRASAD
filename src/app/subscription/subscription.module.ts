
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from "@angular/common";

const routes: Routes = [
    {
        path: 'views',
        loadChildren: () => import('./view/view.module').then(m => m.SubscriptionViewModule)
    },
    {
        path: 'add',
        loadChildren: () => import('./add/add.module').then(m => m.SubscriptionAddModule)
    },
    {
        path: 'automatic',
        loadChildren: () => import('./automatic/automatic.module').then(m => m.SubscriptionAutomaticModule)
    },
    {
        path: 'cancelled',
        loadChildren: () => import('./cancelled/cancelled.module').then(m => m.SubscriptionCancelledModule)
    },
    {
        path: '',
        redirectTo: 'views'
    }
];


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    declarations: []
})
export class SubscriptionModule { }

