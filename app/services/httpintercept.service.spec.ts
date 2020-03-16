import { TestBed } from '@angular/core/testing';

import { HttpinterceptService } from './httpintercept.service';

describe('HttpinterceptService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpinterceptService = TestBed.get(HttpinterceptService);
    expect(service).toBeTruthy();
  });
});
