import { TestBed, inject } from '@angular/core/testing';

import { ApiSearchService } from './api-search.service';

describe('ApiSearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiSearchService]
    });
  });

  it('should ...', inject([ApiSearchService], (service: ApiSearchService) => {
    expect(service).toBeTruthy();
  }));
});
