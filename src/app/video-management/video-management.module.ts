
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from "@angular/common";

const routes: Routes = [
    {
        path: 'list',
        loadChildren: () => import('./list/list.module').then(m => m.VideosListModule)
    },
    {
        path: 'history',
        loadChildren: () => import('./history/history.module').then(m => m.VideosHistoryModule)
    },
    {
        path: 'list/:1233',
        loadChildren: () => import('./details/details.module').then(m => m.VideoDetailsModule)
    },
    {
        path: '',
        redirectTo: 'list'
    }
];


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    declarations: []
})
export class VideoManagementModule { }
