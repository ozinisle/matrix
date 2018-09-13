import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyContactsLandingPageComponent } from './my-contacts-landing-page.component';

describe('MyContactsLandingPageComponent', () => {
  let component: MyContactsLandingPageComponent;
  let fixture: ComponentFixture<MyContactsLandingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyContactsLandingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyContactsLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
