import { HttpClient, HttpClientModule } from '@angular/common/http';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { of, firstValueFrom } from 'rxjs';
import { productsMock } from '../test-mocks/products-mock';

import { ProductsService } from './products.service';

describe('ProductsService', () => {
  let service: ProductsService;
  let http: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(ProductsService);
    http = TestBed.inject(HttpClient);
    spyOn(http, 'get').and.returnValue(of(productsMock));
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getProducts should load products and perform validation on them', fakeAsync(async () => {
    const products = await firstValueFrom(service.getProducts());

    tick();

    expect(products.every((x) => !!x.id)).toBeTrue();
    expect(products.every((x) => !!x.image && x.image.includes('https://cms-cdn'))).toBeTrue();
  }));
});
