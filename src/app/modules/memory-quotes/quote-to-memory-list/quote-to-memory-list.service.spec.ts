import { TestBed, inject } from '@angular/core/testing';

import { QuoteToMemoryListService } from './quote-to-memory-list.service';

describe('QuoteToMemoryListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuoteToMemoryListService]
    });
  });

  it('should be created', inject([QuoteToMemoryListService], (service: QuoteToMemoryListService) => {
    expect(service).toBeTruthy();
  }));
});
