import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCarousalsComponent } from './add-carousals.component';

describe('AddCarousalsComponent', () => {
  let component: AddCarousalsComponent;
  let fixture: ComponentFixture<AddCarousalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCarousalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCarousalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
