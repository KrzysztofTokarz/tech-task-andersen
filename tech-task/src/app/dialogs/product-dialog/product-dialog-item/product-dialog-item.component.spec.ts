import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDialogItemComponent } from './product-dialog-item.component';

describe('ProductDialogItemComponent', () => {
  let component: ProductDialogItemComponent;
  let fixture: ComponentFixture<ProductDialogItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ProductDialogItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDialogItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
