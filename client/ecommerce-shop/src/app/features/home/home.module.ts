import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductComponent } from './components/product/product.component';
import { SearchComponent } from './components/search/search.component';
import { CoreModule } from "../../core/core.module";



@NgModule({
  declarations: [
    HomeComponent,
    ProductsListComponent,
    ProductComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    CoreModule
],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
