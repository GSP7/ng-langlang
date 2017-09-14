import { TestBed, inject } from '@angular/core/testing';

import { DatetoolsService } from './datetools.service';

describe('DatetoolsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DatetoolsService]
    });
  });

  it('should be created', inject([DatetoolsService], (service: DatetoolsService) => {
    expect(service).toBeTruthy();
  }));
});
