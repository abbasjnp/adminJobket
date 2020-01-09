import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobApprovedComponent } from './job-approved.component';

describe('JobApprovedComponent', () => {
  let component: JobApprovedComponent;
  let fixture: ComponentFixture<JobApprovedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobApprovedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobApprovedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
