import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NeuvooSourceComponent } from './neuvoo-source.component';

describe('NewSourceComponent', () => {
  let component: NeuvooSourceComponent;
  let fixture: ComponentFixture<NeuvooSourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeuvooSourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NeuvooSourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
