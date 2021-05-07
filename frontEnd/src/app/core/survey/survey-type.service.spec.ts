import { TestBed } from '@angular/core/testing';

import { SurveyTypeService } from './survey-type.service';

describe('SurveyTypeService', () => {
  let service: SurveyTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SurveyTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
