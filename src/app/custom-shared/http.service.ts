// http.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class HalService {


    constructor(private http: HttpClient) { }

    // public Apis


    getUserinfo(obj) {
        let path = "members/public/verification-settings/fetch";
        return this.http.post(environment.api.host + path, obj)
            .pipe(tap(_ => this.log('response received')));
    }
    sendOtp(obj) {
        let path = "members/public/send-otp";
        return this.http.post(environment.api.host + path, obj)
            .pipe(tap(_ => this.log('response received')));
    }

    login(obj) {
        let path = "members/login";
        return this.http.post(environment.api.host + path, obj)
            .pipe(tap(_ => this.log('response received')));
    }
    register(obj) {
        let path = "members/register";
        return this.http.post(environment.api.host + path, obj)
            .pipe(tap(_ => this.log('response received')));

    }
    verifyOtp(obj) {
        let path = "members/verify-account";
        return this.http.post(environment.api.host + path, obj)
            .pipe(tap(_ => this.log('response received')));
    }
    uploadDoc(obj, name: any) {
        let path = "members/public/upload/" + name;
        return this.http.post(environment.api.host + path, obj)
            .pipe(tap(_ => this.log('response received')));
    }
    resendCode(obj) {

        let path = "members/resend-confirmation-code";
        return this.http.post(environment.api.host + path, obj)
            .pipe(tap(_ => this.log('response received')));
    }
    getProfileInfo() {
        let path = "members/secure/get-profile";
        return this.http.get(environment.api.host + path)
            .pipe(tap(_ => this.log('response received')));

    }
    googleAuthentication(obj) {
        let path = 'members/secure/settings/tfa-verification/fetch';

        return this.http.post(environment.api.host + path, obj)
            .pipe(tap(_ => this.log('response received')));
    }
    enableGoogleAuth(obj) {
        let path = "members/secure/settings/tfa-verification/enable";
        return this.http.post(environment.api.host + path, obj)
            .pipe(tap(_ => this.log('response received')));
    }
    disableGoogleAuth(obj) {
        let path = "members/secure/settings/tfa-verification/disable";
        return this.http.post(environment.api.host + path, obj)
            .pipe(tap(_ => this.log('response received')));
    }
    emailEnableRequest() {
        let path = 'members/secure/settings/email-verification/enable-request';
        return this.http.post(environment.api.host + path, {})
            .pipe(tap(_ => this.log('response received')));
    }
    emailEnable(obj) {
        let path = 'members/secure/settings/email-verification/enable';
        return this.http.post(environment.api.host + path, obj)
            .pipe(tap(_ => this.log('response received')));
    }
    emailRequestDisable() {
        let path = 'members/secure/settings/email-verification/disable-request';
        return this.http.post(environment.api.host + path, {})
            .pipe(tap(_ => this.log('response received')));
    }
    emailDisable(obj) {
        let path = 'members/secure/settings/email-verification/disable';
        return this.http.post(environment.api.host + path, obj)
            .pipe(tap(_ => this.log('response received')));
    }
    mobileEnableRequest() {
        let path = 'members/secure/settings/phone-verification/enable-request';
        return this.http.post(environment.api.host + path, "")
            .pipe(tap(_ => this.log('response received')));
    }
    mobileEnable(obj) {
        let path = 'members/secure/settings/phone-verification/enable';
        return this.http.post(environment.api.host + path, obj)
            .pipe(tap(_ => this.log('response received')));
    }
    mobileRequestDisable() {
        let path = 'members/secure/settings/phone-verification/disable-request';
        return this.http.post(environment.api.host + path, "")
            .pipe(tap(_ => this.log('response received')));
    }
    mobileDisable(obj) {
        let path = 'members/secure/settings/phone-verification/disable';
        return this.http.post(environment.api.host + path, obj)
            .pipe(tap(_ => this.log('response received')));
    }
    getOfferInfo() {
        let path = 'offers/secure/fetch';
        return this.http.get(environment.api.host + path)
            .pipe(tap(_ => this.log('response received')));
    }

    getBalance() {
        let path = 'members/secure/my-balance';
        return this.http.get(environment.api.host + path)
            .pipe(tap(_ => this.log('response received')));
    }
    getCreditTransactions() {
        let path = 'transactions/secure/credit-transactions';
        return this.http.get(environment.api.host + path)
            .pipe(tap(_ => this.log('response received')));
    }
    getAllTransactions(){
        let path = 'transactions/secure/all-transactions';
        return this.http.get(environment.api.host + path)
            .pipe(tap(_ => this.log('response received')));
    }
    getDebitTransactions() {
        let path = 'transactions/secure/debit-transactions';
        return this.http.get(environment.api.host + path)
            .pipe(tap(_ => this.log('response received')));
    }

    forgotPassword(obj) {
        let path = "members/forgot-password";
        return this.http.post(environment.api.host + path, obj)
            .pipe(tap(_ => this.log('response received')));
    }

    resetPassword(obj) {
        let path = "members/reset-password";
        return this.http.post(environment.api.host + path, obj)
            .pipe(tap(_ => this.log('response received')));
    }


    changePassword(obj) {
        let path = "members/secure/change-password";
        return this.http.put(environment.api.host + path, obj)
            .pipe(tap(_ => this.log('response received')));
    }

    getKycdocs() {
        let path = "kyc-docs/secure/fetch";
        return this.http.get(environment.api.host + path)
            .pipe(tap(_ => this.log('response received')));
    }

    submitKycdocs(obj) {
        let path = "kyc-docs/secure/kyc-submit";
        return this.http.post(environment.api.host + path, obj)
            .pipe(tap(_ => this.log('response received')));
    }



    uploadIdentityDoc(obj) {
        let path = 'kyc-docs/secure/upload/KycDoc';
        return this.http.post(environment.api.host + path, obj)
            .pipe(tap(_ => this.log('response received')));
    }

    updateProfile(obj) {
        let path = 'members/secure/profile';
        return this.http.put(environment.api.host + path, obj)
            .pipe(tap(_ => this.log('response received')));
    }

    financeRequest(obj) {
        let path = 'payment/secure/credit-request/confirm';
        return this.http.post(environment.api.host + path, obj)
            .pipe(tap(_ => this.log('response received')));
    }
    //===================payment calls

    checkoutInit(obj) {
        let path = 'payment/secure/check-out';
        return this.http.post(environment.api.host + path, obj)
            .pipe(tap(_ => this.log('response received')));
    }
    paymentCancel(obj) {
        let path = 'payment/secure/cancel';
        return this.http.post(environment.api.host + path, obj)
            .pipe(tap(_ => this.log('response received')));

    }
    paymentConfirm(obj) {
        let path = 'payment/secure/confirm';
        return this.http.post(environment.api.host + path, obj)
            .pipe(tap(_ => this.log('response received')));

    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            // TODO:We need to add here...refresh token functionality

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // TODO: better job of transforming error for user consumption
            this.log(`${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }

    /** Log a HeroService message with the MessageService */
    private log(message: string) {
    }
}
