import { Validators } from '@angular/forms';

export const ValidationMessages = {
    /**
     * Login
     */
    email: [
        { type: 'required', message: 'Mobile number is required' },
        { type: 'pattern', message: 'Invalid Mobile number' }
    ],

    password: [
        { type: 'required', message: 'Password is Mandatory' },
        { type: 'pattern', message: 'Password must be minimum 8 characters , must contain atleast one upper case letter, one lower case, one number and special character. Example: Ab@12345' }
    ],

    /**
     * Site Settingss
     */

    siteName: [
        { type: 'required', message: 'Site Name is required' },
    ],
    frontEndUrl: [
        { type: 'required', message: 'Frontend Url is required' },
    ],
    siteLogo: [
        { type: 'required', message: 'Site Logo is required' },
    ],
    siteIcon: [
        { type: 'required', message: 'Site Icon is required' },
    ],
    /**
     * Add Announcement
     */
    title: [
        { type: 'required', message: 'Title is required' },
    ],
    status: [
        { type: 'required', message: 'Status is required' },
    ],
    description: [
        { type: 'required', message: 'Description is required' },
        { type: 'maxlength', message: 'Description should not exceed 256 characters' }
    ],
};

export const ValidationPatterns = {
    required: Validators.required,
    email: Validators.compose([Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
    password: Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(256), Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$*^.[\]{}()?\-"!@#%&/\\,><':;|_~`])[0-9a-zA-Z$*^.[\]{}()?\-"!@#%&/\\,><':;|_~`]{8,}$/)]),
    description: Validators.compose([Validators.required, Validators.maxLength(256)]),

}