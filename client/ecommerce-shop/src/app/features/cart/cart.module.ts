import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { ProductComponent } from './components/product/product.component';



@NgModule({
  declarations: [
    CartComponent,
    ProductComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CartModule { }
