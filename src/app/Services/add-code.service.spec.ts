import { TestBed } from '@angular/core/testing';

import { AddCodeService } from './add-code.service';

describe('AddCodeService', () => {
  let service: AddCodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddCodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
