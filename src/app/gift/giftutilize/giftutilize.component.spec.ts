import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftutilizeComponent } from './giftutilize.component';

describe('GiftutilizeComponent', () => {
  let component: GiftutilizeComponent;
  let fixture: ComponentFixture<GiftutilizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GiftutilizeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GiftutilizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
