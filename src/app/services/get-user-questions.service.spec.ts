import { TestBed } from '@angular/core/testing';

import { GetUserQuestionsService } from './get-user-questions.service';

describe('GetUserQuestionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetUserQuestionsService = TestBed.get(GetUserQuestionsService);
    expect(service).toBeTruthy();
  });
});
