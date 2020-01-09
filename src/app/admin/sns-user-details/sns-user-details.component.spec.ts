import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnsUserDetailsComponent } from './sns-user-details.component';

describe('SnsUserDetailsComponent', () => {
  let component: SnsUserDetailsComponent;
  let fixture: ComponentFixture<SnsUserDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnsUserDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnsUserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
