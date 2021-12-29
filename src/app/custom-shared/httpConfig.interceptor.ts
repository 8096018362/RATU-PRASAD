//httpConfig.interceptor.ts
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpResponse,
    HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
// import { AlertMsgService } from './alert-service';

@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {
    loaderToShow: any;
    constructor(
        public router: Router,
        // public alertMsgService: AlertMsgService,
    ) { }


    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const token = localStorage.getItem('accessToken');

        //Authentication by setting header with token value
        if (token) {
            request = request.clone({
                setHeaders: {
                    'x-access-token': token,
                    'X-Api-Key': environment.api.api_key
                }
            });
        }

        request = request.clone({
            headers: request.headers.set('X-Api-Key', environment.api.api_key)
        });
        //  this.showLoader();
        return next.handle(request).pipe(
            map((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                    //    console.log('event--->>>', event);
                }
                return event;
            }),
            catchError((error: HttpErrorResponse) => {
         //   this.alertMsgService.hideLoader();
            
                if (error.status == 0) {
                    this.router.navigate(['/login']);
                }
                else{
                    if(error.error.err =="Session Timeout, please login again"){
                        this.router.navigate(['/login']);
                        // this.router.navigate(['/hal']);

                    }
                }
                return throwError(error);
            }));
    }

    showLoader() {
        // this.loaderToShow = this.loadingController.create({
        //     message: 'Processing Server Request'
        // }).then((res) => {
        //     res.present();

        //     res.onDidDismiss().then((dis) => {
        //     });
        // });
        // this.hideLoader();
    }

    hideLoader() {
        //this.loadingController.dismiss();
    }


}