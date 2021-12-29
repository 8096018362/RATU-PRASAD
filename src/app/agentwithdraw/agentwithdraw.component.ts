import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, AbstractControl, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { takeWhile } from 'rxjs/operators';
import { ApiService } from 'src/app/services/api.service';
import swal from 'sweetalert';
import { GlobalService } from '../shared/global-services/service';
import { SearchCountryField, TooltipLabel, CountryISO } from 'ngx-intl-tel-input';


@Component({
  selector: 'app-agentwithdraw',
  templateUrl: './agentwithdraw.component.html',
  styleUrls: ['./agentwithdraw.component.scss']
})

export class AgentwithdrawComponent implements OnInit {

  separateDialCode = false;
  SearchCountryField = SearchCountryField;
  TooltipLabel = TooltipLabel;
  CountryISO = CountryISO;
  preferredCountries: CountryISO[] = [CountryISO.UnitedStates, CountryISO.UnitedKingdom];

  public addAgentWithdrawForm: FormGroup;
  userValue: boolean = true;

  countriesList: any = []
  cityList: any = [];
  public genderTypes = ['Male', 'Female']
  public loginObj: any = {};
  constructor(
    public fb: FormBuilder,
    private appService: ApiService,
    public router: Router,
    public globalService: GlobalService
  ) {
    this.loginObj = JSON.parse(sessionStorage.getItem('loginObj'))
    this.globalService.getCountriesList().subscribe((data: any) => {
      this.countriesList = data;
      data.find((obj) => {
        if (obj.code == 'MY') {
          this.cityList = obj.states;
        }
      })
    })

    this.addAgentWithdrawForm = this.fb.group({
      'username': [null, Validators.compose([Validators.required, Validators.maxLength(30)])],
      'passport': ['', Validators.required],
      'phoneNumber': [null, Validators.required],
      'email': [null, Validators.required],
      'address': [null, Validators.required],
      'amount': ['', Validators.required],
      'account_number': ['', Validators.required],
      'branch': ['', Validators.required],
      'swiftcode': ['', Validators.required]
    })
  }
  ngOnInit() {
  }

  changePreferredCountries() {
    this.preferredCountries = [CountryISO.India, CountryISO.Canada];
  }

  public onCountryChange() {
    this.cityList = [];
    this.countriesList.find((obj) => {
      if (obj.code == this.addAgentWithdrawForm.value.country) {
        this.cityList = obj.states;
      }
    })
  }
  formValidate: boolean = false;
  public doSubmit() {
  
    this.formValidate = true;
    if (this.addAgentWithdrawForm.valid) {
      let obj =
      {
        "fullname": this.addAgentWithdrawForm.value.username,
        "amount": this.addAgentWithdrawForm.value.amount,
        "email": this.addAgentWithdrawForm.value.email,
        "accountnumber": this.addAgentWithdrawForm.value.account_number,
        "branchname": this.addAgentWithdrawForm.value.branch,
        "swiftcode": this.addAgentWithdrawForm.value.swiftcode,
        "uid": parseInt(this.loginObj.userData.uid),
        "address": this.addAgentWithdrawForm.value.address,
        "phonenumber": this.addAgentWithdrawForm.value.phoneNumber.e164Number,
        "requestedby": "agent",
        "passportnumber": this.addAgentWithdrawForm.value.passport
      }
      this.appService.agentWithDrawSubmit(obj).subscribe((data: any) => {
        console.log(data)
        swal("Successful!", "Form Submitted Successfully...", "success").then((result) => {
          if (result) {
            const link = ['/gift/view'];
            this.router.navigate(link);
            this.formValidate = false;

          }
        });
      })
    } else {
      // swal("Error!", "Please fill in all the required fields", "error")
    }

  }
}