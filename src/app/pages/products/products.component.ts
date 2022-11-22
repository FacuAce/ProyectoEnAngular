import { Component } from '@angular/core';
import { ProductsService } from './services/products.service';
import { tap } from 'rxjs/operators';
import { Product } from './interfaces/product.interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  products!: Product[];

  constructor(private readonly productsService: ProductsService) {}

  ngOnInit(): void {
    this.productsService
      .getProducts()
      .pipe(tap((products: Product[]) => (this.products = products)))
      .subscribe();
  }

  addToCart(product: Product): void {}
}
