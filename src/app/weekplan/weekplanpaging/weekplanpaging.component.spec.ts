import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekplanpagingComponent } from './weekplanpaging.component';

describe('WeekplanpagingComponent', () => {
  let component: WeekplanpagingComponent;
  let fixture: ComponentFixture<WeekplanpagingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeekplanpagingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeekplanpagingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
