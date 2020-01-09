import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayRewardsComponent } from './pay-rewards.component';

describe('PayRewardsComponent', () => {
  let component: PayRewardsComponent;
  let fixture: ComponentFixture<PayRewardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayRewardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayRewardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
