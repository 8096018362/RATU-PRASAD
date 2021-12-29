import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { takeWhile } from 'rxjs/operators';
import { ApiService } from 'src/app/services/api.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit, OnDestroy {
  statusList = [{ text: 'Active', value: 'ACTIVE' }, { text: 'InActive', value: 'INACTIVE' }];
  public file: any;
  public form: FormGroup;
  componentActive = true;
  icon: any;
  gif_img: any;
  base64textString = [];
  showLoading = false;
  showError = false;
  gifName = '';
  iconName = '';
  @ViewChild(FormGroupDirective) formDirective: FormGroupDirective;
  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    public router: Router,
    public matSnackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      status: ['ACTIVE', Validators.required],
      // id: ['', Validators.required],
      value: ['', Validators.required],
      // type: ['', Validators.required],
      added_by: ['', Validators.required],
      conversion_rate: ['', Validators.required],
      remarks: ['', Validators.required]
    });

    // if (this.api.giftId) {
    //   this.showLoading = true;
    //   this.api.getGiftById(this.api.giftId).pipe(takeWhile(() => this.componentActive))
    //     .subscribe((response: any) => {
    //       this.form.patchValue(response[0]);
    //       this.showLoading = false;
    //     });
    // }

    let added_by = JSON.parse(sessionStorage.getItem('loginUsername'))

    this.form.controls['added_by'].setValue(added_by)
  }

  clearForm() {
    this.formValidate = false;
    this.form.markAsUntouched();
    this.formDirective.resetForm()
    this.form.reset(this.form.value)
    let added_by = JSON.parse(sessionStorage.getItem('loginUsername')).number

    this.form.controls['added_by'].setValue(added_by)
    this.form.controls['status'].setValue('ACTIVE')

  }

  ngOnDestroy(): void {
    this.componentActive = false;
  }

  onIconUpload(event: any, field?: string) {
    this.file = event.target.files[0];
    if (this.file) {
      this.iconName = this.file.name;
      const reader = new FileReader();
      reader.onload = this.handleReaderLoadedIcon.bind(this);
      reader.readAsBinaryString(this.file);
    }
  }
  onGifUpload(event: any, field?: string) {
    this.file = event.target.files[0];
    if (this.file) {
      this.gifName = this.file.name;
      const reader = new FileReader();
      reader.onload = this.handleReaderLoadedGif.bind(this);
      reader.readAsBinaryString(this.file);
    }
  }
  handleReaderLoadedIcon(e) {
    this.icon = 'data:image/png;base64,' + btoa(e.target.result);
  }
  handleReaderLoadedGif(e) {
    this.gif_img = 'data:image/png;base64,' + btoa(e.target.result);
  }

  formValidate: boolean = false;

  save(): void {
    this.formValidate = true;

    if (this.form.valid) {
      console.log(this.form.value)
      console.log(this.icon)
      console.log(this.gif_img)
      this.showError = false;
      this.showLoading = true;
      const data = this.form.getRawValue();
      
      const request = {
        name: data.name,
        value: data.value,
        status: data.status,
        type: data.type,
        added_by: JSON.parse(sessionStorage.getItem('loginObj')).userid,
        conversion_rate: data.conversion_rate,
        remarks: data.remarks,
        //icon: 'https://firebasestorage.googleapis.com/v0/b/ratustaging.appspot.com/o/rn_image_picker_lib_temp_7d81fdf4-f5ed-47d3-bc22-9caec56a6755.jpg?alt=media&token=2c720c27-0b97-424c-8905-04faa9184437',
        //gif_img: 'https://firebasestorage.googleapis.com/v0/b/ratustaging.appspot.com/o/rn_image_picker_lib_temp_7d81fdf4-f5ed-47d3-bc22-9caec56a6755.jpg?alt=media&token=2c720c27-0b97-424c-8905-04faa9184437'
        gif_img: this.gif_img,
        icon: this.icon
      };



      this.api.saveGift(request).pipe(takeWhile(() => this.componentActive)).subscribe(response => {
        this.showLoading = false;
        if (response.gift == 'gift created Successfully') {
          swal("Successful!", "Gift information saved!", "success").then((result) => {
            if (result) {
              const link = ['/gift/view'];
              this.router.navigate(link);
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
      });
    }
  }

}


// if (this.api.giftId) {
//   this.showLoading = true;
//   const data = this.form.getRawValue();
//   const request = {
//     name: data.name,
//     value: data.value,
//     status: data.status,
//     type: data.type,
//     added_by: data.added_by,
//     conversion_rate: data.conversion_rate,
//     remarks: data.remarks,
//     icon: this.icon,
//     gif_img: this.gif_img
//   };
//   this.api.updateGift(request, this.api.giftId).pipe(takeWhile(() => this.componentActive)).subscribe(response => {
//     this.showLoading = false;
//     swal("Successful!", "Gift information Updated!", "success").then((result) => {
//       if (result) {
//         const link = ['/gift/view'];
//         this.router.navigate(link);
//       }
//     });
//   });
// }


// if (this.api.giftId) {
//   this.showLoading = true;
//   const data = this.form.getRawValue();
//   const request = {
//     name: data.name,
//     value: data.value,
//     status: data.status,
//     type: data.type,
//     added_by: data.added_by,
//     conversion_rate: data.conversion_rate,
//     remarks: data.remarks,
//     icon: this.icon,
//     gif_img: this.gif_img
//   };
//   this.api.updateGift(request, this.api.giftId).pipe(takeWhile(() => this.componentActive)).subscribe(response => {
//     this.showLoading = false;
//     swal("Successful!", "Gift information Updated!", "success").then((result) => {
//       if (result) {
//         const link = ['/gift/view'];
//         this.router.navigate(link);
//       }
//     });
//   });
// }