import { TestBed } from '@angular/core/testing';

import { WizardbarService } from './wizardbar.service';

describe('WizardbarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WizardbarService = TestBed.get(WizardbarService);
    expect(service).toBeTruthy();
  });
});
