import { TestBed } from '@angular/core/testing';

import { LayoutHelperService } from './layout-helper.service';

describe('LayoutHelperService', () => {
  let service: LayoutHelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LayoutHelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
