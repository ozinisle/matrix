import { TestBed, inject } from '@angular/core/testing';

import { MatrixCommunicationChannelEncryptionService } from './matrix-communication-channel-encryption.service';

describe('MatrixCommunicationChannelEncryptionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MatrixCommunicationChannelEncryptionService]
    });
  });

  it('should be created', inject([MatrixCommunicationChannelEncryptionService], (service: MatrixCommunicationChannelEncryptionService) => {
    expect(service).toBeTruthy();
  }));
});
