import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from 'src/app/models/product';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { DialogService } from 'src/app/services/dialog.service';
import { ProductDialogComponent } from 'src/app/dialogs/product-dialog/product-dialog.component';

@Component({
  selector: 'app-product-carousel',
  standalone: true,
  imports: [CommonModule, NgbCarouselModule],
  templateUrl: './product-carousel.component.html',
  styleUrls: ['./product-carousel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCarouselComponent {
  @Input() products!: Product[];

  constructor(private dialogService: DialogService) {}

  handleShowProductDialog(product: Product) {
    this.dialogService.show(ProductDialogComponent, { product });
  }
}
