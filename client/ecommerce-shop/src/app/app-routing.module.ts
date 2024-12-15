import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { ProductPageComponent } from './features/product-page/product-page.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "products/:id", component: ProductPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
