import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobCarousalsComponent } from './job-carousals.component';

describe('JobCarousalsComponent', () => {
  let component: JobCarousalsComponent;
  let fixture: ComponentFixture<JobCarousalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobCarousalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobCarousalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
