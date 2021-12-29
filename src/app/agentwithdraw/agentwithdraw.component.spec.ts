import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentwithdrawComponent } from './agentwithdraw.component';

describe('AgentwithdrawComponent', () => {
  let component: AgentwithdrawComponent;
  let fixture: ComponentFixture<AgentwithdrawComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgentwithdrawComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentwithdrawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
