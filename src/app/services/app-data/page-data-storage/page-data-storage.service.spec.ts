import { TestBed } from '@angular/core/testing';

import { PageDataStorageService } from './page-data-storage.service';

describe('DataStoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PageDataStorageService = TestBed.get(PageDataStorageService);
    expect(service).toBeTruthy();
  });
});
