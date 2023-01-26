import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductsService } from 'src/app/services/products.service';
import { map, Observable } from 'rxjs';
import { Product } from 'src/app/models/product';
import { ArrayUtils } from 'src/app/utils/array-utils';
import { ProductCarouselComponent } from "../product-carousel/product-carousel.component";

@Component({
    selector: 'app-products-list',
    standalone: true,
    templateUrl: './products-list.component.html',
    styleUrls: ['./products-list.component.scss'],
    imports: [CommonModule, NgbCarouselModule, ProductCarouselComponent]
})
export class ProductsListComponent {
  readonly displayedItemsCount = 8;

  products$: Observable<Product[][]> = this.productsService.getProducts().pipe(
    map((products) => {  
      const next = ArrayUtils.createArrayIterator(products, this.displayedItemsCount);
      const slideOneItems = next();
      const slideTwoItems = next();
      const slideThreeItems = next();

      const result: Product[][] = []
      for (let i = 0; i < this.displayedItemsCount; i++) {
        result.push([slideOneItems[i], slideTwoItems[i], slideThreeItems[i]])
      }
      return result;
    })
  );

  constructor(public productsService: ProductsService) {}
}
