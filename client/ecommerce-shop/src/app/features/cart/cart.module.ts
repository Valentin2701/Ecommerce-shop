import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { ProductComponent } from './components/product/product.component';
import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  declarations: [
    CartComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class CartModule { }
