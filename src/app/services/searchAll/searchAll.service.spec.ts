import { TestBed } from '@angular/core/testing';
import { SearchAllService } from './searchall.service';
import { HttpClient, HttpHandler } from '@angular/common/http';


describe('SearchAllService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [ HttpClient, HttpHandler ]
  }));

  it('should be created', () => {
    const service: SearchAllService = TestBed.get(SearchAllService);
    expect(service).toBeTruthy();
  });
});
