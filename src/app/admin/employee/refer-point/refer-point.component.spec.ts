import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferPointComponent } from './refer-point.component';

describe('ReferPointComponent', () => {
  let component: ReferPointComponent;
  let fixture: ComponentFixture<ReferPointComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReferPointComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferPointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
