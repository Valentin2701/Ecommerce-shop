import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';
import { Product } from 'src/app/core/types/Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() product: Product = {} as Product;

  constructor(private productService: ApiService, private router: Router){}

  removeProduct(){

  }
}
