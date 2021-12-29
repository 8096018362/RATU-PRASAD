import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StreamerreportComponent } from './streamerreport.component';

describe('StreamerreportComponent', () => {
  let component: StreamerreportComponent;
  let fixture: ComponentFixture<StreamerreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StreamerreportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StreamerreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
