import { TestBed } from '@angular/core/testing';
import { SearchAllService } from './searchall.service';


describe('SearchAllService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SearchAllService = TestBed.get(SearchAllService);
    expect(service).toBeTruthy();
  });
});
