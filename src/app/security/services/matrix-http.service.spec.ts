import { TestBed, inject } from '@angular/core/testing';

import { MatrixHttpService } from './matrix-http.service';

describe('MatrixHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MatrixHttpService]
    });
  });

  it('should be created', inject([MatrixHttpService], (service: MatrixHttpService) => {
    expect(service).toBeTruthy();
  }));
});
