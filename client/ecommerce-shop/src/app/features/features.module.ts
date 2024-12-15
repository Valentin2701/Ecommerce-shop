import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
import { ProductPageModule } from './product-page/product-page.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [HomeModule, ProductPageModule]
})
export class FeaturesModule { }
