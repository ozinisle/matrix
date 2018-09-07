import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoiLandingPageComponent } from './moi-landing-page.component';

describe('MoiLandingPageComponent', () => {
  let component: MoiLandingPageComponent;
  let fixture: ComponentFixture<MoiLandingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoiLandingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoiLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
