import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoiEntryComponent } from './moi-entry.component';

describe('MoiEntryComponent', () => {
  let component: MoiEntryComponent;
  let fixture: ComponentFixture<MoiEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoiEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoiEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
