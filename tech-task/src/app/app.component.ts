import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductsListComponent } from "./components/products-list/products-list.component";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [CommonModule, ProductsListComponent]
})
export class AppComponent {}
