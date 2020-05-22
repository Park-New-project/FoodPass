import { TestBed } from '@angular/core/testing';

import { BasketControllerService } from './basket-controller.service';

describe('BasketControllerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BasketControllerService = TestBed.get(BasketControllerService);
    expect(service).toBeTruthy();
  });
});
