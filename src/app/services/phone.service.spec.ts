import { TestBed } from '@angular/core/testing';

import { phoneservice } from './phone.service';

describe('phoneservice', () => {
  let service: phoneservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(phoneservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
