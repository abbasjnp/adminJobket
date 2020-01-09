import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserErrorActivityLogComponent } from './user-error-activity-log.component';

describe('UserErrorActivityLogComponent', () => {
  let component: UserErrorActivityLogComponent;
  let fixture: ComponentFixture<UserErrorActivityLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserErrorActivityLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserErrorActivityLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
