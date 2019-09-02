import { TestBed } from '@angular/core/testing';
import { HttpmoqService } from './httpmoq.service';

describe('HttpmoqService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpmoqService = TestBed.get(HttpmoqService);
    expect(service).toBeTruthy();
  });
});
