import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IDialogComponent } from 'src/app/services/dialog.service';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product } from 'src/app/models/product';
import { MatButtonModule } from '@angular/material/button';
import { ProductDialogItemComponent } from './product-dialog-item/product-dialog-item.component';

interface DialogData {
  product: Product;
}

@Component({
  selector: 'app-product-dialog',
  standalone: true,
  templateUrl: './product-dialog.component.html',
  styleUrls: ['./product-dialog.component.scss'],
  imports: [CommonModule, MatButtonModule, ProductDialogItemComponent, MatDialogModule],
})
export class ProductDialogComponent implements IDialogComponent {
  constructor(
    public dialog: MatDialogRef<ProductDialogComponent, null>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onClose() {
    this.dialog.close();
  }
}
