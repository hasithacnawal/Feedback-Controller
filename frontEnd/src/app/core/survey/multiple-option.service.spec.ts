import { TestBed } from '@angular/core/testing';

import { MultipleOptionService } from './multiple-option.service';

describe('MultipleOptionService', () => {
  let service: MultipleOptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MultipleOptionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
