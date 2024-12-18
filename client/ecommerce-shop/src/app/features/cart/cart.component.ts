import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
import { Product } from 'src/app/core/types/Product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  products: Product[] = [];

  constructor(private productService: ApiService) {}

  ngOnInit(): void {
      this.productService.getFromCart().subscribe(products => this.products = products);
  }
}
