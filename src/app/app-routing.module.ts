import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './theme/layout/admin/admin.component';
import { AuthComponent } from './theme/layout/auth/auth.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'admin-home',
        pathMatch: 'full'
      },
      {
        path: 'admin-home',
        loadChildren: () => import('./admin-home/admin-home.module').then(module => module.AdminHomeModule)
      },
      {
        path: 'admin-profile',
        loadChildren: () => import('./admin-profile/admin-profile.module').then(module => module.AdminProfileModule)
      },
      {
        path: 'users',
        loadChildren: () => import('./users/users.module').then(module => module.UsersModule)
      },
      {
        path: 'settings',
        loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule)
      },
      {
        path: 'subscription',
        loadChildren: () => import('./subscription/subscription.module').then(m => m.SubscriptionModule)
      },
      {
        path: 'notifications',
        loadChildren: () => import('./notifications/notifications.module').then(m => m.NotificationsModule)
      },
      {
        path: 'announcements',
        loadChildren: () => import('./announcements/announcements.module').then(m => m.AnnouncementsModule)
      },
      {
        path: 'videos',
        loadChildren: () => import('./video-management/video-management.module').then(m => m.VideoManagementModule)
      },
      {
        path: 'crown',
        loadChildren: () => import('./crown/crown.module').then(m => m.CrownModule)
      },
      {
        path: 'gift',
        loadChildren: () => import('./gift/gift.module').then(m => m.GiftModule)
      },
      {
        path: 'bonus',
        loadChildren: () => import('./bonus/bonus.module').then(m => m.BonusModule)
      },
      {
        path: 'reports',
        loadChildren: () => import('./reports/reports.module').then(m => m.ReportsModule)
      },
      {
        path: 'streamerprofile',
        loadChildren: () => import('./streamerprofile/streamerprofile.module').then(m => m.StreamerprofileModule)
      },
      {
        path: 'livestreamer',
        loadChildren: () => import('./livestreamer/livestreamer.module').then(m => m.LivestreamerModule)
      },
      {
        path: 'agenttransaction',
        loadChildren: () => import('./agenttransaction/agenttransaction.module').then(m => m.AgenttransactionModule)
      },
      {
        path: 'agentwithdraw',
        loadChildren: () => import('./agentwithdraw/agentwithdraw.module').then(m => m.AgentwithdrawModule)
      },

      {
        path: 'withdrawable',
        loadChildren: () => import('./withdrawble-management/withdrawble.module').then(m => m.WithdrawableModule)
      },
      {
        path: 'email',
        loadChildren: () => import('./demo/application/email/email.module').then(module => module.EmailModule)
      },
    ]
  },
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'auth',
        loadChildren: () => import('./demo/pages/authentication/authentication.module').then(module => module.AuthenticationModule)
      },
      {
        path: 'maintenance',
        loadChildren: () => import('./demo/pages/maintenance/maintenance.module').then(module => module.MaintenanceModule)
      }
    ]
  }
];

RouterModule.forRoot(routes, { useHash: true })

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
