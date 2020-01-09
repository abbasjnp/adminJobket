import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnsUserTrackingComponent } from './sns-user-tracking.component';

describe('SnsUserTrackingComponent', () => {
  let component: SnsUserTrackingComponent;
  let fixture: ComponentFixture<SnsUserTrackingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnsUserTrackingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnsUserTrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
