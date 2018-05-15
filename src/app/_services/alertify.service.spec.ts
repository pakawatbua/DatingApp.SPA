import { AlertifyService } from './alertify.service';
import { TestBed } from '@angular/core/testing';

describe('AlertifyService', () => {

  let service: AlertifyService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AlertifyService
      ]
    });
    service = TestBed.get(AlertifyService);

  });

  it('should be able to create service instance', () => {
    expect(service).toBeDefined();
  });

});
