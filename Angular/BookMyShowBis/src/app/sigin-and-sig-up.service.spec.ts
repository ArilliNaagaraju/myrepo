import { TestBed } from '@angular/core/testing';

import { SiginAndSigUpService } from './sigin-and-sig-up.service';

describe('SiginAndSigUpService', () => {
  let service: SiginAndSigUpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SiginAndSigUpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
