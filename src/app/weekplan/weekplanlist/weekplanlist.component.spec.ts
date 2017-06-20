import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekplanlistComponent } from './weekplanlist.component';

describe('WeekplanlistComponent', () => {
  let component: WeekplanlistComponent;
  let fixture: ComponentFixture<WeekplanlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeekplanlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeekplanlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
