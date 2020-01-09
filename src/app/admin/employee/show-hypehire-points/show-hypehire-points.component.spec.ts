import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowHypehirePointsComponent } from './show-hypehire-points.component';

describe('ShowHypehirePointsComponent', () => {
  let component: ShowHypehirePointsComponent;
  let fixture: ComponentFixture<ShowHypehirePointsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowHypehirePointsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowHypehirePointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
