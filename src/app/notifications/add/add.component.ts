import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { takeWhile } from 'rxjs/operators';
import { ApiService } from 'src/app/services/api.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  statusList = [{ text: 'Active', value: 'ACTIVE' }, { text: 'InActive', value: 'INACTIVE' }];
  form: FormGroup;
  componentActive = true;
  showLoading = false;
  showError = false;

  constructor(private fb: FormBuilder,
    public api: ApiService,
    public router: Router) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      subject: [],
      description: [],
      type: [],
      status: [],
      id: [],
      expiry_date_time: [],
      created_date: [],
      modified_date: [],
    });
    if (this.api.notificationId) {
      this.showLoading = true;
      this.api.getNotificationById(this.api.notificationId).pipe(takeWhile(() => this.componentActive))
        .subscribe((response: any) => {
          this.form.patchValue(response[0]);
          this.showLoading = false;
        });
    }
  }

  save() {
    if (this.form.valid) {
      const formData = this.form.getRawValue();
      if (this.api.notificationId) {
        this.showLoading = true;
        this.api.updateNotification(formData, this.api.notificationId).pipe(takeWhile(() => this.componentActive))
          .subscribe((response: any) => {
            console.log(response);
            this.showLoading = false;
            this.api.notificationId = '';
            swal("Successful!", "notification information updated!", "success").then((result) => {
              if (result) {
                const link = ['/notifications/views'];
                this.router.navigate(link);
              }
            });
          });
      } else {
        this.showLoading = true;
        this.api.saveNotification(formData).pipe(takeWhile(() => this.componentActive))
          .subscribe((response: any) => {
            console.log(response);
            this.api.notificationId = '';
            this.showLoading = false;
            swal("Successful!", "notification information saved!", "success").then((result) => {
              if (result) {
                const link = ['/notifications/views'];
                this.router.navigate(link);
              }
            });
          });
      }
    } else {
      this.showError = true;
    }
  }


  ngOnDestroy(): void {
    this.componentActive = false;
    this.api.notificationId = '';
  }

}

