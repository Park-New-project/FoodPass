import { TestBed } from '@angular/core/testing';

import { PageControllerService } from './page-controller.service';

describe('PageControllerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PageControllerService = TestBed.get(PageControllerService);
    expect(service).toBeTruthy();
  });
});
