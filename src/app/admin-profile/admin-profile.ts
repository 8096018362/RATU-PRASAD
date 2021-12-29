import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-admin-profile',
    templateUrl: './admin-profile.html',
    styleUrls: ['./admin-profile.scss']
})
export class AdminProfileComponent implements OnInit {

    userInfo: any = {
        username: 'ramu vishwanatham',
        email: 'vishwanathamramu@gmail.com',
        mobile: '+60123456789',
        address: 'Southbank Residence',
        userType:'Admin'
    };
    constructor() {

    }
    ngOnInit() {

    }

}