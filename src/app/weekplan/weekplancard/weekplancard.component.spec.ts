import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekplancardComponent } from './weekplancard.component';

describe('WeekplancardComponent', () => {
  let component: WeekplancardComponent;
  let fixture: ComponentFixture<WeekplancardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeekplancardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeekplancardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
