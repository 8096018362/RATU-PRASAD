import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-settings-component',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

    selectedSetting:any='Site'

    settingList: any = [
        {
            name: 'Site',
            link: '/settings/site'
        },
        {
            name: 'video',
            link: '/settings/video'
        },
        {
            name: 'social',
            link: '/settings/social'
        },
        { 
            name: 'email', link: '/settings/email'
         },
        { name: 'revenue', link: '/settings/revenue' },
        { name: 'payment', link: '/settings/payment' },
        { name: 'company', link: '/settings/company' },
        { name: 'app url', link: '/settings/appurl' },
        { name: 'notification', link: '/settings/notification' },
        { name: 'seo', link: '/settings/seo' },
        { name: 'other', link: '/settings/other' }
    ]



    constructor() { }
    ngOnInit() { }
}