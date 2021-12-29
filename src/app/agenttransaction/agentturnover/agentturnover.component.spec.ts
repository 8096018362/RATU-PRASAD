import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentturnoverComponent } from './agentturnover.component';

describe('AgentturnoverComponent', () => {
  let component: AgentturnoverComponent;
  let fixture: ComponentFixture<AgentturnoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgentturnoverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentturnoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
