import { TestBed } from '@angular/core/testing';

import { GetQuestionsTitleService } from './get-questions-title.service';

describe('GetQuestionsTitleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetQuestionsTitleService = TestBed.get(GetQuestionsTitleService);
    expect(service).toBeTruthy();
  });
});
