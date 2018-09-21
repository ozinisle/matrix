import { TestBed, inject } from '@angular/core/testing';

import { QuoteToMemoryEntryService } from './quote-to-memory-entry.service';

describe('QuoteToMemoryEntryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuoteToMemoryEntryService]
    });
  });

  it('should be created', inject([QuoteToMemoryEntryService], (service: QuoteToMemoryEntryService) => {
    expect(service).toBeTruthy();
  }));
});
