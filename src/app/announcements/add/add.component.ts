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
  public file: any;
  base64textString = [];

  constructor(private fb: FormBuilder,
    public api: ApiService,
    public router: Router) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      category: [],
      subject: [],
      description: [],
      type: [],
      status: [],
      id: [],
      expiry_date_time: [],
      created_date: [],
      modified_date: [],
      image: []
    });
    if (this.api.announcementId) {
      this.showLoading = true;
      this.api.getAnnouncementById(this.api.announcementId).pipe(takeWhile(() => this.componentActive))
        .subscribe((response: any) => {
          this.form.patchValue(response[0]);
          this.showLoading = false;
        });
    }
  }

  save() {
    if (this.form.valid) {
      this.showError = false;
      const formData = this.form.getRawValue();
      if (this.api.announcementId) {
        this.showLoading = true;
        this.api.updateAnnouncement(formData, this.api.announcementId).pipe(takeWhile(() => this.componentActive))
          .subscribe((response: any) => {
            console.log(response);
            this.showLoading = false;
            this.api.announcementId = '';
            swal("Successful!", "announcement information updated!", "success").then((result) => {
              if (result) {
                const link = ['/announcements/views'];
                this.router.navigate(link);
              }
            });
          });
      } else {
        this.showLoading = true;
        this.api.saveAnnouncement(formData).pipe(takeWhile(() => this.componentActive))
          .subscribe((response: any) => {
            console.log(response);
            this.api.announcementId = '';
            this.showLoading = false;
            swal("Successful!", "announcement information saved!", "success").then((result) => {
              if (result) {
                const link = ['/announcements/views'];
                this.router.navigate(link);
              }
            });
          });
      }
    } else {
      this.showError = true;
    }
  }
  onFileChanged(event: any, field?: string) {
    this.file = event.target.files[0];
    if (this.file) {
      const reader = new FileReader();
      reader.onload = this.handleReaderLoaded.bind(this);
      reader.readAsBinaryString(this.file);
    }
  }
  handleReaderLoaded(e) {
    this.base64textString.push('data:image/png;base64,' + btoa(e.target.result));
    this.form.get('image').setValue('data:image/png;base64,' + btoa(e.target.result));
  }


  ngOnDestroy(): void {
    this.componentActive = false;
    this.api.announcementId = '';
  }

}

