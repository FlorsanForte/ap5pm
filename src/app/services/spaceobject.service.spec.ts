import { TestBed } from '@angular/core/testing';

import { SpaceobjectService } from './spaceobject.service';

describe('SpaceobjectService', () => {
  let service: SpaceobjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpaceobjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
