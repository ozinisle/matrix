import { MemoryQuotesModule } from './memory-quotes.module';

describe('MemoryQuotesModule', () => {
  let memoryQuotesModule: MemoryQuotesModule;

  beforeEach(() => {
    memoryQuotesModule = new MemoryQuotesModule();
  });

  it('should create an instance', () => {
    expect(memoryQuotesModule).toBeTruthy();
  });
});
