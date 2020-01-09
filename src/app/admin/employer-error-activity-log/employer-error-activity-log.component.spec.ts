import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerErrorActivityLogComponent } from './employer-error-activity-log.component';

describe('EmployerErrorActivityLogComponent', () => {
  let component: EmployerErrorActivityLogComponent;
  let fixture: ComponentFixture<EmployerErrorActivityLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployerErrorActivityLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployerErrorActivityLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
