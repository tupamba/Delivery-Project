import { TestBed } from '@angular/core/testing';
import {HttpClientModule} from '@angular/common/http';
import { HttpDataService } from './http-data.service';

describe('HttpserviceService', () => {
  let service: HttpDataService;
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule],
    providers: [HttpDataService]
  }));
  service = TestBed.get(HttpDataService);
  it('should be created', () => {
    const service: HttpDataService = TestBed.get(HttpDataService);
    expect(service).toBeTruthy();
  });
  it('get deliveries', () => {
    service.getDeliveries().subscribe(res =>
      {
        expect(res).toBeDefined();
      });
  });
});  
