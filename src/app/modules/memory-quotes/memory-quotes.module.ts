import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuoteToMemoryEntryComponent } from './quote-to-memory-entry/quote-to-memory-entry.component';
import { QuoteToMemoryListComponent } from './quote-to-memory-list/quote-to-memory-list.component';
import { SharedModule } from '../../shared/shared.module';
import { MemoryQuotesRouter } from './memory-quotes.routing';
import { QuoteToMemoryListService } from './quote-to-memory-list/quote-to-memory-list.service';
import { QuoteToMemoryEntryService } from './quote-to-memory-entry/quote-to-memory-entry.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MemoryQuotesRouter
  ],
  declarations: [
    QuoteToMemoryEntryComponent,
    QuoteToMemoryListComponent
  ],
  providers: [
    QuoteToMemoryListService,
    QuoteToMemoryEntryService
  ]
})
export class MemoryQuotesModule { }
