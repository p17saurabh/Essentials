import { TestBed } from '@angular/core/testing';

import { GetVideosService } from './get-videos.service';

describe('GetVideosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetVideosService = TestBed.get(GetVideosService);
    expect(service).toBeTruthy();
  });
});
