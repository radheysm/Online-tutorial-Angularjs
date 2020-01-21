import { TestBed } from '@angular/core/testing';

import { StaticpagesService } from './staticpages.service';

describe('StaticpagesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StaticpagesService = TestBed.get(StaticpagesService);
    expect(service).toBeTruthy();
  });
});
