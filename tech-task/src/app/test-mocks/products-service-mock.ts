import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { productsValidatedMock } from './products-mock';

@Injectable()
export class ProductsServiceMock {
  getProducts() {
    return of(productsValidatedMock);
  }
}
