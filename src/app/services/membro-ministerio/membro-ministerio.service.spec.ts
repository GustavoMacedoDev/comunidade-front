import { TestBed } from '@angular/core/testing';

import { MembroMinisterioService } from './membro-ministerio.service';

describe('MembroMinisterioService', () => {
  let service: MembroMinisterioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MembroMinisterioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
