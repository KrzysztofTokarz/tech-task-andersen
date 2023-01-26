import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get<Product[]>('assets/data.json').pipe(map((products) => this.validateProducts(products)));
  }

  private validateProducts(products: Product[]): Product[] {
    return products.map((prod, i) => {
      // it could be also edited in data.json file, but if those data would be loaded from api then we couldn`t do it
      if ((prod as any).imageone) {
        prod.image = (prod as any).imageone;
      }
      const imgUrl = prod.image.includes('https://cdn') ? prod.image.replace('https://cdn', 'https://cms-cdn') : prod.image;
      
      return {
        ...prod,
        // added ids to make it easier to work with items - it can be useful in some cases, expecially because backend API usually send items with ids
        id: i + 1,
        image: imgUrl,
      };
    });
  }
}
