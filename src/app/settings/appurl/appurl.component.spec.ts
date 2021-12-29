import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppurlComponent } from './appurl.component';

describe('AppurlComponent', () => {
  let component: AppurlComponent;
  let fixture: ComponentFixture<AppurlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppurlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppurlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
