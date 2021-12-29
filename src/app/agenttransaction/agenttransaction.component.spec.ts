import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgenttransactionComponent } from './agenttransaction.component';

describe('AgenttransactionComponent', () => {
  let component: AgenttransactionComponent;
  let fixture: ComponentFixture<AgenttransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgenttransactionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgenttransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
