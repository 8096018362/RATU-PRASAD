import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ValidationMessages, ValidationPatterns } from 'src/app/custom-shared/validations-info'
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthService } from '../../../../services/auth.service';
import { SearchCountryField, TooltipLabel, CountryISO } from 'ngx-intl-tel-input';
import * as CryptoJs from 'crypto-js';

//implement Firebase Configuration

import firebase from 'firebase';
import { environment } from '../../../../../environments/environment';
import { first } from 'rxjs/operators';
import { ApiService } from 'src/app/services/api.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-auth-signin',
  templateUrl: './auth-signin.component.html',
  styleUrls: ['./auth-signin.component.scss']
})
export class AuthSigninComponent implements OnInit {
  separateDialCode = false;
  SearchCountryField = SearchCountryField;
  TooltipLabel = TooltipLabel;
  CountryISO = CountryISO;
  preferredCountries: CountryISO[] = [CountryISO.UnitedStates, CountryISO.UnitedKingdom];
  errorMessage: string;

  validation_messages: any = {};
  patterns: any = {};
  loginForm: FormGroup;
  userObj: any = {

  }
  phone;
  recaptchaVerifier: any;
  constructor(
    public router: Router,
    public formBuilder: FormBuilder,
    public fbauth: AuthService,
    public apiService: ApiService,
    public matSnackBar: MatSnackBar
  ) {
    this.validation_messages = ValidationMessages;
    this.patterns = ValidationPatterns

    this.loginForm = this.formBuilder.group({
      password: ['', Validators.required],
      email: ['', Validators.required]
    });

  }

  ngOnInit() {

  }

  changePreferredCountries() {
    this.preferredCountries = [CountryISO.India, CountryISO.Canada];
  }
  submittedForm: boolean = false;
  gotoDashboard() {
    this.submittedForm = true;
    if (this.loginForm.valid) {
      this.submittedForm = false;

      let encryptPassword = CryptoJs.AES.encrypt(this.loginForm.value.password, '_`%xZ?N&5!U,/Ym7').toString();

      let reqObj = {
        email: this.loginForm.value.email,
        password: encryptPassword
      }

      this.apiService.adminLogin(reqObj).subscribe(res => {
        if (res['success']) {
          sessionStorage.setItem('loginStatus', 'true')
          sessionStorage.setItem('userToken', res['data'].token)
          sessionStorage.setItem('loginUsername', JSON.stringify(this.loginForm.value.email))
          sessionStorage.setItem('loginObj', JSON.stringify(res['data']))
          this.matSnackBar.open('Successfully Login', 'OK', {
            panelClass: 'snack-success',
            duration: 2000,
            verticalPosition: 'top',
            horizontalPosition: 'right', //'start' | 'center' | 'end' | 'left' | 'right'
          })
          setTimeout(() => {
            this.router.navigate(['./admin-home'])
          }, 2000)
        }
      }, err => {
        this.matSnackBar.open(err.error.err, 'OK', {
          panelClass: 'snack-error',
          verticalPosition: 'top',
          duration: 2000
        })
      })

    } else {
    }

  }

}
