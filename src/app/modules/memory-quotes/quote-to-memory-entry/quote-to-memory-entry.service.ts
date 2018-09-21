import { Injectable } from '@angular/core';
import { QuoteToMemoryEntryModelInterface } from '../models/interfaces/quote-to-memory-entry-model.interface';

@Injectable()
export class QuoteToMemoryEntryService {

  private quoteEntryToBeDisplayed: QuoteToMemoryEntryModelInterface;
  constructor() { }

  public getQuoteEntryToBeDisplayed(): QuoteToMemoryEntryModelInterface {
    return this.quoteEntryToBeDisplayed;
  }

  public setQuoteEntryToBeDisplayed(quoteEntryToBeDisplayed: QuoteToMemoryEntryModelInterface): QuoteToMemoryEntryService {
    this.quoteEntryToBeDisplayed = quoteEntryToBeDisplayed;
    return this;
  }
}
