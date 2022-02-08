import { TestBed } from '@angular/core/testing';

import { SchnittService } from './schnitt.service';

describe('SchnittService', () => {
  let service: SchnittService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SchnittService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
