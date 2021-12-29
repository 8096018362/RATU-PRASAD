// import { Component, OnDestroy, OnInit } from '@angular/core';
// import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Router } from '@angular/router';
// import { takeWhile } from 'rxjs/operators';
// import { ApiService } from 'src/app/services/api.service';
// import { Crown } from '../crown.model';
// import swal from 'sweetalert';
// import swal from 'sweetalert';
// import * as _swal from 'sweetalert';
// import { SweetAlert } from 'sweetalert/typings/core';

// const swal: SweetAlert = _swal as any;

import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, AbstractControl, FormBuilder, Validators, FormArray } from '@angular/forms';
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from '@angular/router';
import { takeWhile } from 'rxjs/operators';
import { ApiService } from 'src/app/services/api.service';
import swal from 'sweetalert';
import { GlobalService } from '../../shared/global-services/service'

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class CrownAddComponent implements OnInit {


  public setCrownForm: FormGroup;
  userValue: boolean = true;

  constructor(
    private readonly fb: FormBuilder,
    private appService: ApiService,
    public router: Router,
    public globalService: GlobalService,
    public matSnackBar: MatSnackBar
  ) {


    this.setCrownForm = new FormGroup({
      //  'crownName': new FormControl(null, Validators.required),
      'crowns': new FormControl(null, Validators.required),
      'crownValue': new FormControl(null, Validators.required)
    })

  }
  file: any;
  iconName = '';
  icon;
  handleReaderLoadedIcon(e) {
    // this.base64textString.push('data:image/png;base64,' + btoa(e.target.result));
    this.icon = 'data:image/png;base64,' + btoa(e.target.result);
  }

  onIconUpload(event: any) {
    this.file = event.target.files[0];
    if (this.file) {
      this.iconName = this.file.name;
      // const reader = new FileReader();
      // reader.onload = this.handleReaderLoadedIcon.bind(this);
      // reader.readAsBinaryString(this.file);
      var myReader:FileReader = new FileReader();
myReader.onloadend = (e) => {
  this.icon = myReader.result;
  console.log(this.icon)
}
myReader.readAsDataURL(event.target.files[0]);
    }
  }

  componentActive = true;
  crownObj;
  ngOnInit() {
    if (JSON.parse(sessionStorage.getItem('crownObj'))) {
      this.crownObj = JSON.parse(sessionStorage.getItem('crownObj'))
      // this.setCrownForm.patchValue(this.crownObj);
      this.setCrownForm = new FormGroup({
        'crowns': new FormControl(this.crownObj.count, Validators.required),
        'crownValue': new FormControl(this.crownObj.value, Validators.required)
      })
      this.icon = this.crownObj.image;
      this.iconName = this.crownObj.image;
    }
  }

  update(){
    this.formValidate = true;
    if (this.setCrownForm.valid && this.icon) {
      let obj = {
        crowns: this.setCrownForm.value.crowns,
        equalCurrencyValue: this.setCrownForm.value.crownValue,
        currency: "MYR",
        image: this.icon,
        id: this.crownObj.id
      }
      this.appService.editCrown(obj).subscribe((data: any) => {
        if(data.success){
        swal("Successful!", "Crown updated Successfully...", "success").then((result) => {
          if (result) {
            sessionStorage.removeItem('crownObj')
            const link = ['/crown/view'];
            this.router.navigate(link);
            this.formValidate = false;
          }
        });
        }
      
      }, err=>{
        console.log(err)
        if(err.error.status == 401){
          this.matSnackBar.open('Session expired. Please Login again', 'OK', {
            panelClass: 'snack-error',
            duration:2000,
            verticalPosition:'top'
          })
          sessionStorage.clear()
          const link = ['/auth/signin'];
          this.router.navigate(link);
        }else{
          this.matSnackBar.open(err.error.err, 'OK', {
            panelClass: 'snack-error',
            duration:2000,
            verticalPosition:'top'
          })
        }
      })
    }
  }

  formValidate: boolean = false;

  public setCrownValue() {
    this.formValidate = true;
    if (this.setCrownForm.valid && this.icon) {
      let obj = {
        image: this.icon,
        crowns: this.setCrownForm.value.crowns,
        equalCurrencyValue: this.setCrownForm.value.crownValue,
        currency: "MYR"
      }
      this.appService.setCrown(obj).subscribe((data: any) => {
        if(data.success){
        swal("Successful!", "Crown Added Successfully...", "success").then((result) => {
          if (result) {
            const link = ['/crown/view'];
            this.router.navigate(link);
            this.formValidate = false;
          }
        });
        }
      
      }, err=>{
        console.log(err)
        if(err.error.status == 401){
          this.matSnackBar.open('Session expired. Please Login again', 'OK', {
            panelClass: 'snack-error',
            duration:2000,
            verticalPosition:'top'
          })
          sessionStorage.clear()
          const link = ['/auth/signin'];
          this.router.navigate(link);
        }else{
          this.matSnackBar.open(err.error.err, 'OK', {
            panelClass: 'snack-error',
            duration:2000,
            verticalPosition:'top'
          })
        }
      })
    }
  }

  // statusList = [{ text: 'Active', value: 'ACTIVE' }, { text: 'InActive', value: 'INACTIVE' }];
  // crownsForm: FormArray;
  // form: FormGroup;
  // componentActive = true;
  // showLoading = false;
  // showError = false;

  // constructor(private fb: FormBuilder,
  //   private api: ApiService,
  //   public router: Router) { }

  // ngOnInit(): void {
  //   this.form = this.fb.group({
  //     crownsForm: this.fb.array([])
  //   });
  //   this.crownsForm = this.form.get('crownsForm') as FormArray;
  //   this.showLoading = true;
  //   this.api.getCrownsList().pipe(takeWhile(() => this.componentActive))
  //     .subscribe((response: Crown[]) => {
  //       response.sort((a, b) => (a.crown_id > b.crown_id) ? 1 : -1);
  //       response.forEach((crown: Crown) => {
  //         const fg = this.createFormGroup();
  //         fg.patchValue(crown);
  //         this.crownsForm.push(fg);
  //       });
  //       this.showLoading = false;
  //     });
  // }

  // createFormGroup(): FormGroup {
  //   return this.fb.group({
  //     crown_id: [],
  //     value: [{ value: '' }, Validators.required],
  //     count: [{ value: '' }, Validators.required],
  //     currency: [],
  //     status: [],
  //     id: [],
  //     created_date: [],
  //     modified_date: [],
  //   });
  // }

  // save(i: number) {
  //   if (this.form.valid) {
  //     this.showError = false;
  //     const formData = this.crownsForm.getRawValue()[i];
  //     if (formData.id) {
  //       this.showLoading = true;
  //       this.api.updateCrown(formData, formData.id).pipe(takeWhile(() => this.componentActive))
  //         .subscribe((response: Crown) => {
  //           console.log(response);
  //           this.showLoading = false;
  //           this.api.crownId = '';
  //           swal("Successful!", "Crown information updated!", "success").then((result) => {
  //             if (result) {
  //             }
  //           });
  //         });
  //     }
  //   } else {
  //     this.showError = true;
  //   }
  // }


  ngOnDestroy(): void {
  //   this.componentActive = false;
  //   this.api.crownId = '';
  sessionStorage.removeItem('crownObj')

  }

  clearForm() {
    this.formValidate = false;
    this.setCrownForm.reset();
  }
}
