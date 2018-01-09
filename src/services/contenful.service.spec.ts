import { TestBed, inject } from '@angular/core/testing';

import { ContenfulService } from './contenful.service';

describe('ContenfulService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContenfulService]
    });
  });

  it('should be created', inject([ContenfulService], (service: ContenfulService) => {
    expect(service).toBeTruthy();
  }));
});
