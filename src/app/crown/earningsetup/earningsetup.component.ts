import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { takeWhile } from 'rxjs/operators';
import { ApiService } from 'src/app/services/api.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-earningsetup',
  templateUrl: './earningsetup.component.html',
  styleUrls: ['./earningsetup.component.scss']
})
export class EarningsetupComponent implements OnInit, OnDestroy {
  statusList = [{ text: 'Active', value: 'ACTIVE' }, { text: 'InActive', value: 'INACTIVE' }];
  selectList = [{ text: '1x', value: '1' }, { text: '2x', value: '2' }, { text: '3x', value: '3' }, { text: '4x', value: '4' }, { text: '5x', value: '5' }, { text: '6x', value: '6' }];
  userTableOptions: any = {};
  componentActive = true;
  setupData = [];
  form: FormGroup;
  id = '';
  showLoading = false;
  showError = false;
  constructor(private api: ApiService, private fb: FormBuilder) { }
  ngOnDestroy(): void {
    this.componentActive = false;
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      id: [],
      user_id: [],
      stream_id: [],
      total_pearls: [],
      example_select: [],
      status: [],
      created_date: [],
      modified_date: []
    });
    this.loadTable();
  }


  save(): void {
    if (this.form.valid) {
      this.showError = false;
      if (this.id) {
        this.showLoading = true;
        this.api.updateEarningSetup(this.form.getRawValue(), this.id).pipe(takeWhile(() => this.componentActive))
          .subscribe((response: any) => {
            console.log(response);
            this.id = '';
            this.form.reset();
            this.showLoading = false;
            swal("Successful!", "Earnings information updated!", "success");
            this.loadTable();
          });
      } else {
        this.showLoading = true;
        this.api.saveEarningSetup(this.form.getRawValue()).pipe(takeWhile(() => this.componentActive))
          .subscribe((response: any) => {
            console.log(response);
            this.id = '';
            this.showLoading = false;
            swal("Successful!", "Earnings information saved!", "success");
            this.form.reset();
            this.loadTable();
          });
      }
    } else {
      this.showError = true;
    }

  }

  updateItem(id: string): void {
    this.id = id;
    this.showLoading = true;
    this.api.getEarningSetupId(id).pipe(takeWhile(() => this.componentActive))
      .subscribe((response: any) => {
        this.form.patchValue(response[0]);
        this.showLoading = false;
      });
  }

  loadTable(): void {
    this.showLoading = true;
    this.userTableOptions = {
      dom: 'Bfrtip',
      buttons: [
        'excel',
        'csv'
      ],
      pagingType: 'full_numbers',
      pageLength: 10,
      processing: true
    };
    this.api.getEarningSetup()
      .pipe(takeWhile(() => this.componentActive))
      .subscribe((response: any) => {
        this.setupData = response;
        this.showLoading = false;
      });
  }



}
