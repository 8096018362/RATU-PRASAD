import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { takeWhile } from 'rxjs/operators';
import { ApiService } from 'src/app/services/api.service';
import swal from 'sweetalert';
import { Router } from '@angular/router';


@Component({
  selector: 'app-convert',
  templateUrl: './convert.component.html',
  styleUrls: ['./convert.component.scss']
})

export class ConvertComponent implements OnInit {
  statusList = [{ text: 'Active', value: 'ACTIVE' }, { text: 'InActive', value: 'INACTIVE' }];
  userTableOptions: any = {};
  componentActive = true;
  setupData = [];
  form: FormGroup;
  id = '';
  showLoading = false;
  showError = false;
  constructor(
    private api: ApiService,
    public router: Router, private fb: FormBuilder) { }

  ngOnDestroy(): void {
    this.componentActive = false;
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      crown_type: ['', Validators.required],
      conversion_rate: ['', Validators.required],
      description: ['', Validators.required],
      status: ['ACTIVE', Validators.required]
    });
  }

  formValidate: boolean = false;
  save(): void {
    this.formValidate = true;
    if (this.form.valid) {
      this.showLoading = true;
      this.api.saveCrownToPearls(this.form.getRawValue()).pipe(takeWhile(() => this.componentActive))
        .subscribe((response: any) => {
          this.showLoading = false;
          this.formValidate = false;
          swal("Successful!", "Conversion information saved!", "success");
          // this.form.reset();
          setTimeout(() => {
            this.router.navigate(['/crown/crown-to-pearl']);
          }, 3000);
        });
    }
  }

  updateItem(id: string): void {
    this.id = id;
    this.showLoading = true;
    this.api.getCrownToPearlsbyId(id).pipe(takeWhile(() => this.componentActive))
      .subscribe((response: any) => {
        this.form.patchValue(response[0]);
        this.showLoading = false;
      });
  }

  // loadTable(): void {
  //   this.showLoading = true;
  //   this.userTableOptions = {
  //     dom: 'Bfrtip',
  //     buttons: [
  //       'excel',
  //       'csv'
  //     ],
  //     pagingType: 'full_numbers',
  //     pageLength: 10,
  //     processing: true
  //   };
  //   this.api.getCrownToPearls()
  //     .pipe(takeWhile(() => this.componentActive))
  //     .subscribe((response: any) => {
  //       this.setupData = response;
  //       this.showLoading = false;
  //     });
  // }



  // this.showLoading = true;
  // this.api.updateCrownToPearls(this.form.getRawValue(), this.id).pipe(takeWhile(() => this.componentActive))
  //   .subscribe((response: any) => {
  //     console.log(response);
  //     this.id = '';
  //     this.showLoading = false;
  //     swal("Successful!", "Conversion information updated!", "success");
  //     this.form.reset();
  //     this.loadTable();
  //   });


}
