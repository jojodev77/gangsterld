import { TestBed } from '@angular/core/testing';

import { GestolionService } from './gestion.service';

describe('GestionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GestolionService = TestBed.get(GestolionService);
    expect(service).toBeTruthy();
  });
});
