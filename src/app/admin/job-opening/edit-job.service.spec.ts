import { TestBed } from '@angular/core/testing';

import { EditJobService } from './edit-job.service';

describe('EditJobService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EditJobService = TestBed.get(EditJobService);
    expect(service).toBeTruthy();
  });
});
