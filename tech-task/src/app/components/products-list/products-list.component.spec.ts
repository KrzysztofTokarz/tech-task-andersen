import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { firstValueFrom } from 'rxjs';
import { ProductsService } from 'src/app/services/products.service';
import { ProductsServiceMock } from 'src/app/test-mocks/products-service-mock';

import { ProductsListComponent } from './products-list.component';

describe('ProductsListComponent', () => {
  let component: ProductsListComponent;
  let fixture: ComponentFixture<ProductsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsListComponent, MatDialogModule],
      providers: [{ provide: ProductsService, useClass: ProductsServiceMock }],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('products$ should group products correctly', async () => {
    const products = await firstValueFrom(component.products$);

    expect(products.length).toBe(component.displayedItemsCount);
    expect(products.every((x) => x.length === 3)).toBeTrue();
  });
});
