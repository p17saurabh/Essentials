import { TestBed } from '@angular/core/testing';

import { GetUrlsService } from './get-urls.service';

describe('GetUrlsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetUrlsService = TestBed.get(GetUrlsService);
    expect(service).toBeTruthy();
  });
});
