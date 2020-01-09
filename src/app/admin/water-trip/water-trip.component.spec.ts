import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterTripComponent } from './water-trip.component';

describe('WaterTripComponent', () => {
  let component: WaterTripComponent;
  let fixture: ComponentFixture<WaterTripComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaterTripComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaterTripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
