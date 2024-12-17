import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../types/Product';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = "/api/products";

  constructor(private http: HttpClient) { }

  getAllProducts() {
    return this.http.get<Product[]>(this.apiUrl);
  }

  getSingleProduct(id: string) {
    return this.http.get<Product>(`${this.apiUrl}/${id}`);
  }

  getRecentProducts() {
    return this.http.get<Product[]>(`${this.apiUrl}/recent`);
  }

  createProduct(product: Product) {
    return this.http.post<void>(`${this.apiUrl}/create`, product);
  }

  editProduct(product: Product, productId: string) {
    return this.http.post<void>(`${this.apiUrl}/edit/${productId}`, product);
  }

  deleteProduct(productId: string) {
    return this.http.post<void>(`${this.apiUrl}/delete/${productId}`, {});
  }

  buyProduct(productId: string) {
    return this.http.post<void>(`${this.apiUrl}/buy/${productId}`, {});
  }

  searchProducts(search: string) {
    return this.http.post<Product[]>(`${this.apiUrl}/search`, { search });
  }
}
