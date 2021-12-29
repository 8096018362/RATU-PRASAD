import { Injectable } from '@angular/core';
import { AngularFireAuth } from  "@angular/fire/auth";
import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/app';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public errorMessage: string;

  constructor(public  afAuth:  AngularFireAuth,public router: Router,) { }
  async login(phone:string,test): Promise<any>{
    this.afAuth.signInWithPhoneNumber(phone,test).then( async confirm=>{
      const sent = true;
      const verification = prompt('Enter verification code');
      if (verification != null) {
        console.log(verification);
        confirm.confirm(verification)
          .then(async ( data) => {
            // all checks out
             this.router.navigate(['./admin-home'])
             return await data.user;
          })
          .catch((bad) => {
            // code verification was bad.
          });
      } else {
        console.log('No verification code entered');
        
      }
      //await prompt.present();
      console.log({'message done':confirm});
    }).catch(function (error){
      console.log("SMS not Sent",error);
      return error;
    });
  }


 

}
