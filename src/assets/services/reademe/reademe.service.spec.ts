import { TestBed } from '@angular/core/testing';

import { ReademeService } from './reademe.service';

describe('ReademeService', () => {
  let service: ReademeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReademeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
