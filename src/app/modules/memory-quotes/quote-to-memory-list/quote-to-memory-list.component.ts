import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { QuoteToMemoryListResponseModelInterface } from '../models/interfaces/quote-to-memory-list-model.interface';
import { QuoteToMemoryListService } from './quote-to-memory-list.service';
import { AlertService } from '../../../shared/directives/alert/alert.service';
import { MatExpansionPanelHeader } from '@angular/material';
import { QuoteToMemoryEntryModelInterface } from '../models/interfaces/quote-to-memory-entry-model.interface';
import { Router } from '@angular/router';


@Component({
  selector: 'app-quote-to-memory-list',
  templateUrl: './quote-to-memory-list.component.html',
  styleUrls: ['./quote-to-memory-list.component.scss']
})
export class QuoteToMemoryListComponent implements OnInit {

  public quoteToMemoryList: QuoteToMemoryListResponseModelInterface;
  panelOpenState = false;

  constructor(
    private quoteToMemoryListService: QuoteToMemoryListService,
    private quoteToMemoryEntryService: QuoteToMemoryEntryService,
    private alertService: AlertService,
    private cdr: ChangeDetectorRef,
    private router: Router
  ) { }

  ngOnInit() {
    try {
      if (!this.quoteToMemoryList) {
        this.quoteToMemoryListService.getQuoteToMemoryList().subscribe(quotesList => {
          this.quoteToMemoryList = <QuoteToMemoryListResponseModelInterface>quotesList;
          this.cdr.detectChanges();
        }, error => {
          this.alertService.error(error);
        });
      }
    } catch (exception) {
      this.alertService.error(exception);
    } finally {

    }
  }

  public openDocument(quote: QuoteToMemoryEntryModelInterface) {
    this.quoteToMemoryEntryService.setQuoteEntryToBeDisplayed(quote);
    this.router.navigate(['./memory-quote-entry']);
  }
}
