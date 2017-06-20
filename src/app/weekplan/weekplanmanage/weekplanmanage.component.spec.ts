import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekplanmanageComponent } from './weekplanmanage.component';

describe('WeekplanmanageComponent', () => {
  let component: WeekplanmanageComponent;
  let fixture: ComponentFixture<WeekplanmanageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeekplanmanageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeekplanmanageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
