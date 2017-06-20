import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekplantoolbarComponent } from './weekplantoolbar.component';

describe('WeekplantoolbarComponent', () => {
  let component: WeekplantoolbarComponent;
  let fixture: ComponentFixture<WeekplantoolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeekplantoolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeekplantoolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
