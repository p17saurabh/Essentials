import { TestBed } from '@angular/core/testing';

import { PostQuesrionService } from './post-quesrion.service';

describe('PostQuesrionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PostQuesrionService = TestBed.get(PostQuesrionService);
    expect(service).toBeTruthy();
  });
});
