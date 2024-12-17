import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
import { ProductPageModule } from './product-page/product-page.module';
import { RegisterModule } from './register/register.module';
import { LoginModule } from './login/login.module';
import { AddProductModule } from './add-product/add-product.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports: [HomeModule, ProductPageModule, RegisterModule, LoginModule, AddProductModule]
})
export class FeaturesModule { }
