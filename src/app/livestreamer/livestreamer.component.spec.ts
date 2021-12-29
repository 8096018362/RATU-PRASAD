import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivestreamerComponent } from './livestreamer.component';

describe('LivestreamerComponent', () => {
  let component: LivestreamerComponent;
  let fixture: ComponentFixture<LivestreamerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivestreamerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LivestreamerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
