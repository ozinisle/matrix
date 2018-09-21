import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteToMemoryListComponent } from './quote-to-memory-list.component';

describe('QuoteToMemoryListComponent', () => {
  let component: QuoteToMemoryListComponent;
  let fixture: ComponentFixture<QuoteToMemoryListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuoteToMemoryListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteToMemoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
