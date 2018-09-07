import { TestBed, inject } from '@angular/core/testing';

import { MyContactsLandingPageService } from './my-contacts-landing-page.service';

describe('MyContactsLandingPageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyContactsLandingPageService]
    });
  });

  it('should be created', inject([MyContactsLandingPageService], (service: MyContactsLandingPageService) => {
    expect(service).toBeTruthy();
  }));
});
