import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { takeWhile } from 'rxjs/operators';
import { ApiService } from 'src/app/services/api.service';
import swal from 'sweetalert';
import { Bonus } from '../bonus.model'

@Component({
  selector: 'app-bonuslist',
  templateUrl: './bonuslist.component.html',
  styleUrls: ['./bonuslist.component.scss']
})
export class BonuslistComponent implements OnInit {
  bonusForm: FormGroup;
  componentActive = true;
  id = '';
  showLoading = false;

  constructor(
    public router: Router,
    public api: ApiService,
    public fb: FormBuilder
  ) { }


  ngOnInit(): void {
    this.showLoading = true;
    this.api.getBonusDetails().pipe(takeWhile(() => this.componentActive)).subscribe((response: Bonus[]) => {
      this.showLoading = false;
      if (response.length > 0) {
        const bonus = response[0];
        this.id = bonus.id;
        this.bonusForm = this.fb.group({
          day_1: [bonus.day_1],
          day_2: [bonus.day_2],
          day_3: [bonus.day_3],
          day_4: [bonus.day_4],
          day_5: [bonus.day_5],
          day_6: [bonus.day_6],
          day_7: [bonus.day_7],
        });
        this.showLoading = false;
      }
    });
  }

  save(): void {
    this.api.updateBonus(this.bonusForm.getRawValue(), this.id).pipe(takeWhile(() => this.componentActive)).subscribe(response => {
      console.log(response);
      swal("Successful!", "Bonus information updated!", "success").then((result) => {
        if (result) {
          const link = ['/admin-home'];
          this.router.navigate(link);
        }
      });
    });
  }

  gotoBonusDetails(obj) {
    const link = ['/bonus/view', obj.id];
    this.router.navigate(link);
  }

}
