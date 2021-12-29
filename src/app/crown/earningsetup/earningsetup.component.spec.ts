import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EarningsetupComponent } from './earningsetup.component';

describe('EarningsetupComponent', () => {
  let component: EarningsetupComponent;
  let fixture: ComponentFixture<EarningsetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EarningsetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EarningsetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
