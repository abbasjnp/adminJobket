import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHiperhirePointsComponent } from './add-hiperhire-points.component';

describe('AddHiperhirePointsComponent', () => {
  let component: AddHiperhirePointsComponent;
  let fixture: ComponentFixture<AddHiperhirePointsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddHiperhirePointsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddHiperhirePointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
