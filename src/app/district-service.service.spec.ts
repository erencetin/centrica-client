/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DistrictService } from './district.service';

describe('Service: DistrictService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DistrictService]
    });
  });

  it('should ...', inject([DistrictService], (service: DistrictService) => {
    expect(service).toBeTruthy();
  }));
});
