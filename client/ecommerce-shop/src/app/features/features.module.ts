import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
import { ProductPageModule } from './product-page/product-page.module';
import { RegisterModule } from './register/register.module';
import { LoginModule } from './login/login.module';
import { AddProductModule } from './add-product/add-product.module';
import { CartModule } from './cart/cart.module';
import { EditModule } from './edit/edit.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports: [HomeModule, ProductPageModule, RegisterModule, LoginModule, AddProductModule, CartModule, EditModule]
})
export class FeaturesModule { }
