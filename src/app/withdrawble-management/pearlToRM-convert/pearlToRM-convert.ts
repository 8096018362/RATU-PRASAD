import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { takeWhile } from 'rxjs/operators';
import { ApiService } from 'src/app/services/api.service';
import swal from 'sweetalert';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
    selector: 'app-convert',
    templateUrl: './pearlToRM-convert.html',
    //styleUrls: ['./convert.component.scss']
})

export class PearlToRMConvertComponent implements OnInit {
    statusList = [{ text: 'Active', value: 'active' }, { text: 'InActive', value: 'inactive' }];
    userTableOptions: any = {};
    componentActive = true;
    setupData = [];
    form: FormGroup;
    id = '';
    showLoading = false;
    showError = false;
    constructor(
        private api: ApiService,
        public router: Router,
        private fb: FormBuilder,
        public matSnackBar: MatSnackBar) { }

    ngOnDestroy(): void {
        this.componentActive = false;
        sessionStorage.removeItem('selPearl')
    }
    editPearlObj;
    ngOnInit(): void {
        this.form = this.fb.group({
            pearl_type: ['', Validators.required],
            conversion_rate: ['', Validators.required],
            description: ['', Validators.required],
            status: ['active', Validators.required]
        });
        if (JSON.parse(sessionStorage.getItem('selPearl'))) {
            this.editPearlObj = JSON.parse(sessionStorage.getItem('selPearl'));
            this.form.patchValue(this.editPearlObj)
        }
    }

    update() {
        this.formValidate = true;
        if (this.form.valid) {
            let request = {
                conversion_rate: this.form.value.conversion_rate,
                description: this.form.value.description,
                pearl_type: this.form.value.pearl_type,
                status: this.form.value.status
            }
            this.showLoading = true;
            this.api.editPeraltoRmConvert(request, this.editPearlObj.uid).pipe(takeWhile(() => this.componentActive))
                .subscribe((response: any) => {
                    if (response.uid) {
                        this.showLoading = false;
                        this.formValidate = false;
                        swal("Successful!", "Pearl to RM Conversion saved!", "success");
                        // this.form.reset();
                        setTimeout(() => {
                            this.router.navigate(['/withdrawable/pearl-to-rm']);
                        }, 3000);
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

    formValidate: boolean = false;
    save(): void {
        this.formValidate = true;
        if (this.form.valid) {
            console.log(this.form.value)
            let request = {
                conversion_rate: this.form.value.conversion_rate,
                description: this.form.value.description,
                pearl_type: this.form.value.pearl_type,
                status: this.form.value.status,
                action: 'approve',
                pearl_condition: 'crowns to pearl',
                pearl_logic: 'pay per session'
            }
            this.showLoading = true;
            this.api.addPearlToRmConvert(request).pipe(takeWhile(() => this.componentActive))
                .subscribe((response: any) => {
                    this.showLoading = false;
                    this.formValidate = false;
                    swal("Successful!", "Conversion information saved!", "success");
                    this.form.reset();
                    setTimeout(() => {
                        // this.router.navigate(['/crown/crown-to-pearl']);
                    }, 3000);
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

    updateItem(id: string): void {
        this.id = id;
        this.showLoading = true;
        this.api.getCrownToPearlsbyId(id).pipe(takeWhile(() => this.componentActive))
            .subscribe((response: any) => {
                this.form.patchValue(response[0]);
                this.showLoading = false;
            });
    }


}
