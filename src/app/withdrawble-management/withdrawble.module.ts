import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from "@angular/common";

const routes: Routes = [
    {
        path: 'list',
        loadChildren: () => import('./list/list.module').then(m => m.withdrableListModule)
    },
    {
        path: 'process',
        loadChildren: () => import('./process/process.module').then(m => m.withdrableProcessModule)
    },

    {
        path: 'pearl-to-rm',
        loadChildren: () => import('./pearlToRM-list/pearlToRM-list.module').then(m => m.PearlToRMListModule)
    },

    {
        path: 'pearl-rm-convert',
        loadChildren: () => import('./pearlToRM-convert/pearlToRM-convert.module').then(m => m.PearlToRmConvertModule)
    }
    ,
    // {
    //     path: 'add',
    //     loadChildren: () => import('./add/add.module').then(m => m.UsersAddModule)
    // },
    // {
    //     path: 'decline',
    //     loadChildren: () => import('./decline/decline.module').then(m => m.UsersDeclineModule)
    // },
    // {
    //     path: 'streamers',
    //     loadChildren: () => import('./streamers/streamers.module').then(m => m.UsersStreamersModule)
    // },
    // {
    //     path: 'agent',
    //     loadChildren: () => import('./agent/agent.module').then(m => m.AgentModule)
    // },
    // {
    //     path: 'agent-request',
    //     loadChildren: () => import('./agent-request/agent-request.module').then(m => m.AgentRequestModule)
    // },

    // {
    //     path: 'view/:id',
    //     loadChildren: () => import('./sel-user/sel-user.module').then(m => m.SelUserModule)
    // },
    {
        path: '',
        redirectTo: 'list'
    }
];


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
    ],
    declarations: []
    
})
export class WithdrawableModule { }
