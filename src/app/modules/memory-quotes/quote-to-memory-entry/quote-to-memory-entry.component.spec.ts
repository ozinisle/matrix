import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteToMemoryEntryComponent } from './quote-to-memory-entry.component';

describe('QuoteToMemoryEntryComponent', () => {
  let component: QuoteToMemoryEntryComponent;
  let fixture: ComponentFixture<QuoteToMemoryEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuoteToMemoryEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteToMemoryEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
