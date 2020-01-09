import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerActivityLogComponent } from './employer-activity-log.component';

describe('EmployerActivityLogComponent', () => {
  let component: EmployerActivityLogComponent;
  let fixture: ComponentFixture<EmployerActivityLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployerActivityLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployerActivityLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
