import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from "@angular/common";

const routes: Routes = [
    {
        path: 'view',
        loadChildren: () => import('./view/view.module').then(m => m.UsersViewModule)
    },
    {
        path: 'add',
        loadChildren: () => import('./add/add.module').then(m => m.UsersAddModule)
    },
    {
        path: 'decline',
        loadChildren: () => import('./decline/decline.module').then(m => m.UsersDeclineModule)
    },
    {
        path: 'streamers',
        loadChildren: () => import('./streamers/streamers.module').then(m => m.UsersStreamersModule)
    },
    {
        path: 'agent',
        loadChildren: () => import('./agent/agent.module').then(m => m.AgentModule)
    },
    {
        path: 'agent-request',
        loadChildren: () => import('./agent-request/agent-request.module').then(m => m.AgentRequestModule)
    },

    {
        path: 'view/:id',
        loadChildren: () => import('./sel-user/sel-user.module').then(m => m.SelUserModule)
    },
    {
        path: '',
        redirectTo: 'view'
    }
];


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    declarations: []
})
export class UsersModule { }
