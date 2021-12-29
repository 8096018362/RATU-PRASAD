import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ValidationMessages, ValidationPatterns } from 'src/app/custom-shared/validations-info'
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
    selector: 'app-site',
    templateUrl: './site.component.html',
    styleUrls: ['./site.component.scss']
})

export class SiteComponent implements OnInit {
    favIcon: HTMLLinkElement = document.querySelector('#appIcon');

    validation_messages: any = {};
    patterns: any = {};
    siteForm: FormGroup;


    constructor(
        private titleService: Title,
        public router: Router,
        public formBuilder: FormBuilder,
        // public alertMsgService: AlertMsgService,
        // public halService: HalService
    ) {
        this.validation_messages = ValidationMessages;
        this.patterns = ValidationPatterns

        this.siteForm = this.formBuilder.group({
            siteName: [null, this.patterns.required],
            frontEndUrl: [null, this.patterns.required],
            siteLogo: [null, this.patterns.required],
            siteIcon: [null, this.patterns.required]
        });
    }

    ngOnInit() { }


    doSiteChanges() {
        if (this.siteForm.valid) {

        }
    }

    setTitle(newTitle: string) {
        this.titleService.setTitle(newTitle);
    }

    changeFav() {
        this.favIcon.href = 'https://www.google.com/favicon.ico';

    }
}

