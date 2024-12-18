import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ApiService } from 'src/app/core/services/api.service';
import { Product } from 'src/app/core/types/Product';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  public rows: Product[][] = [];

  constructor(private productService: ApiService) { }

  ngOnInit(): void {
    this.productService.getRecentProducts().subscribe((prod: Product[]) => this.rows = this.getRows(prod));
  }

  private getRows(products: Product[]): Product[][] {
    const rows: Product[][] = [];
    for (let i = 0; i < products.length; i++) {
      if (i % 2 == 0) rows.push([products[i]]);
      else rows[(i - 1) / 2].push(products[i]);
    }
    return rows
  }
}
