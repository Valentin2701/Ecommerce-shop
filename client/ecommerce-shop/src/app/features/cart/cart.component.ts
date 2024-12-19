import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';
import { Product } from 'src/app/core/types/Product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products: Product[] = [];
  sum: Number = 0;

  constructor(private productService: ApiService, private router: Router) { }

  buyProducts() {
    this.productService.buyProducts(this.products).subscribe(() => this.router.navigate(['/']).then(() => window.location.reload()));
  }

  ngOnInit(): void {
    this.productService.getFromCart().subscribe((products: Product[]) => {
      this.products = products;
      this.sum = products.reduce((a, c) => a + c.price, 0);
    });
  }
}
