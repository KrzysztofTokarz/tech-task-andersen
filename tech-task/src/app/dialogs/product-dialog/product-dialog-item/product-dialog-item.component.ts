import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-dialog-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-dialog-item.component.html',
  styleUrls: ['./product-dialog-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDialogItemComponent {
  @Input() title!: string;
  @Input() value!: any;
  @Input() valueFallback: string = "---"
}
