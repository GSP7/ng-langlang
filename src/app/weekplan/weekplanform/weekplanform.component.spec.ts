import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekplanformComponent } from './weekplanform.component';

describe('WeekplanformComponent', () => {
  let component: WeekplanformComponent;
  let fixture: ComponentFixture<WeekplanformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeekplanformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeekplanformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
