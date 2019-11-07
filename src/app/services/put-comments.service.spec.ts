import { TestBed } from '@angular/core/testing';

import { PutCommentsService } from './put-comments.service';

describe('PutCommentsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PutCommentsService = TestBed.get(PutCommentsService);
    expect(service).toBeTruthy();
  });
});
