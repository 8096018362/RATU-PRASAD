import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthSigninRoutingModule } from './auth-signin-routing.module';
import { AuthSigninComponent } from './auth-signin.component';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { DigitOnlyModule } from '@uiowa/digit-only';
import {MatSnackBarModule} from '@angular/material/snack-bar'
// import {NgxIntlTelInputModule from './node_modules/intl-tel-input'}

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AuthSigninRoutingModule,
    NgxIntlTelInputModule,
    DigitOnlyModule,
    MatSnackBarModule
  ],
  declarations: [AuthSigninComponent]
})
export class AuthSigninModule { }
