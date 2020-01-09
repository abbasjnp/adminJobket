import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FastingPlanComponent } from './fasting-plan.component';

describe('FastingPlanComponent', () => {
  let component: FastingPlanComponent;
  let fixture: ComponentFixture<FastingPlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FastingPlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FastingPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
