import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../theme/shared/shared.module';
import { SettingsComponent } from './settings.component';
import { Routes, RouterModule } from '@angular/router';
import { NgbTabsetModule } from '@ng-bootstrap/ng-bootstrap';
import { EmailComponent } from './email/email.component';
import { RevenueComponent } from './revenue/revenue.component';
import { PaymentComponent } from './payment/payment.component';
import { CompanyComponent } from './company/company.component';
import { AppurlComponent } from './appurl/appurl.component';
import { NotificationComponent } from './notification/notification.component';
import { SeoComponent } from './seo/seo.component';
import { OtherComponent } from './other/other.component';
import { SiteComponent } from './site/site.component';
import { VideoComponent } from './video/video.component';
import { SocialComponent } from './social/social.component';

const routes: Routes = [

    {
        path: '',
        component: SettingsComponent,
        children: [
            {

                path: '', redirectTo: 'site'
            },
            { path: 'site', component: SiteComponent },
            { path: 'video', component: VideoComponent },
            { path: 'social', component: SocialComponent },
            { path: 'email', component: EmailComponent },
            { path: 'appurl', component: AppurlComponent },
            { path: 'company', component: CompanyComponent },
            { path: 'notification', component: NotificationComponent },
            { path: 'other', component: OtherComponent },
            { path: 'payment', component: PaymentComponent },
            { path: 'revenue', component: RevenueComponent },
            { path: 'seo', component: SeoComponent },
        ]
    }
];

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        NgbTabsetModule,
        RouterModule.forChild(routes),

    ],
    declarations: [
        SettingsComponent,
        EmailComponent,
        RevenueComponent,
        PaymentComponent,
        CompanyComponent,
        AppurlComponent,
        NotificationComponent,
        SeoComponent,
        OtherComponent,
        SiteComponent,
        VideoComponent,
        SocialComponent

    ]
})
export class SettingsModule { }

