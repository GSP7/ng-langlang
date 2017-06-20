import { TestBed, inject } from '@angular/core/testing';

import { WeekplanserviceService } from './weekplanservice.service';

describe('WeekplanserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WeekplanserviceService]
    });
  });

  it('should be created', inject([WeekplanserviceService], (service: WeekplanserviceService) => {
    expect(service).toBeTruthy();
  }));
});
