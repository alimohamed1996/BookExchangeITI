import { TestBed } from '@angular/core/testing';

import { RequestsMinService } from './requests-min.service';

describe('RequestsMinService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RequestsMinService = TestBed.get(RequestsMinService);
    expect(service).toBeTruthy();
  });
});
