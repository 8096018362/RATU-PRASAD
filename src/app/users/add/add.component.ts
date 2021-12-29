import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, AbstractControl, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { takeWhile } from 'rxjs/operators';
import { ApiService } from 'src/app/services/api.service';
import swal from 'sweetalert';
import { GlobalService } from '../../shared/global-services/service';
import { SearchCountryField, TooltipLabel, CountryISO } from 'ngx-intl-tel-input';
import * as CryptoJs from 'crypto-js';
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
    selector: '',
    templateUrl: './add.component.html',
    styleUrls: ['./add.component.scss']
})

export class UsersAddComponent implements OnInit {
    addUserForm: FormGroup;
    userValue: boolean = true;

    separateDialCode = false;
    SearchCountryField = SearchCountryField;
    TooltipLabel = TooltipLabel;
    CountryISO = CountryISO;
    preferredCountries: CountryISO[] = [CountryISO.UnitedStates, CountryISO.UnitedKingdom];


    userTypeList: any = [
        {
            name: 'Country Admin',
            id: 'countryadmin'
        },
        {
            name: 'Super Admin',
            id: 'superadmin'
        },
        {
            name: 'Agent',
            id: 'agent'
        },
        {
            name: 'Admin',
            id: 'admin'
        }
    ]

    countriesList: any = []
    cityList: any = [];

    constructor(
        private fb: FormBuilder,
        private appService: ApiService,
        public router: Router,
        public globalService: GlobalService,
        public matSnackBar: MatSnackBar
    ) {

        this.globalService.getCountriesList().subscribe((data: any) => {
            this.countriesList = data;
            data.find((obj) => {
                if (obj.code == 'MY') {
                    this.cityList = obj.states;
                }
            })
        })



    }

    ngOnInit() {
        this.formCreation()
        if (JSON.parse(sessionStorage.getItem('selUser'))) {
            let selObj = JSON.parse(sessionStorage.getItem('selUser'));
            let obj = {
                username: selObj.name,
                usertype: selObj.user_type,
                userid: selObj.userid,
                phoneNumber: selObj.phone,
                email: selObj.email,
                country: selObj.country,
                city: selObj.city
            }
            this.addUserForm.patchValue(obj)
        }
    }


    public formCreation() {
        this.addUserForm = this.fb.group({
            'username': [''],
            'usertype': ['', Validators.required],
            'userid': ['', Validators.required],
            'phoneNumber': [''],
            'email': [''],
            'country': [''],
            'password': ['', Validators.required],
            'confirmPassword': ['', Validators.required],
            'city': ['']
        })
    }


    ngOnDestroy() {
        sessionStorage.removeItem('selUser')
    }


    public onCountryChange() {
        this.cityList = [];
        this.countriesList.find((obj) => {
            if (obj.code == this.addUserForm.value.country) {
                this.cityList = obj.states;
            }
        })
    }

    formValidate = false;
    public addUser() {
        if (this.addUserForm.valid) {
            console.log(this.addUserForm.value)

            let obj = {
                "userId": this.addUserForm.value.userid,
                // "name": this.addUserForm.value.username,
                // "phone": this.addUserForm.value.phoneNumber.e164Number,
                // "email": this.addUserForm.value.email,
                // "country": this.addUserForm.value.country,
                "userType": this.addUserForm.value.usertype,
                "password": CryptoJs.AES.encrypt(this.addUserForm.value.password, '_`%xZ?N&5!U,/Ym7').toString(),
                "confirmPassword": CryptoJs.AES.encrypt(this.addUserForm.value.confirmPassword, '_`%xZ?N&5!U,/Ym7').toString(),
                // "city": this.addUserForm.value.city
            }
            this.appService.addUser(obj).subscribe((data: any) => {
                if (data.success) {
                    swal("Successful!", "User Added Successfully...", "success").then((result) => {
                        if (result) {
                            const link = ['/users/view'];
                            this.router.navigate(link);
                            sessionStorage.removeItem('selUser')
                            this.clearForm();
                        }
                    });
                }

            }, err => {
                if (err.error.status == 401) {
                    this.matSnackBar.open('Session expired. Please Login again', 'OK', {
                        panelClass: 'snack-error',
                        duration: 2000,
                        verticalPosition: 'top'
                    })
                    sessionStorage.clear()
                    const link = ['/auth/signin'];
                    this.router.navigate(link);
                } else {
                    this.matSnackBar.open(err.error.err, 'OK', {
                        panelClass: 'snack-error',
                        duration: 2000,
                        verticalPosition: 'top'
                    })
                }
            })
        } else {
            this.formValidate = true;
        }
    }

    changePreferredCountries() {
        this.preferredCountries = [CountryISO.India, CountryISO.Canada];
    }

    clearForm() {
        this.formValidate = false;
        this.addUserForm.reset();
        this.ngOnInit()
    }


    setValues() {

    }

}