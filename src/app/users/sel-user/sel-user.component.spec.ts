import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelUserComponent } from './sel-user.component';

describe('SelUserComponent', () => {
  let component: SelUserComponent;
  let fixture: ComponentFixture<SelUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
