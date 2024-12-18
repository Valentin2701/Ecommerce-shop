import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { ProductPageComponent } from './features/product-page/product-page.component';
import { AddProductComponent } from './features/add-product/add-product.component';
import { RegisterComponent } from './features/register/register.component';
import { LoginComponent } from './features/login/login.component';
import { LoggedInGuard } from './core/guards/routing.guard';
import { IsGuestGuard } from './core/guards/guest.guard';
import { CartComponent } from './features/cart/cart.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "register", pathMatch: "full", component: RegisterComponent, canActivate: [IsGuestGuard] },
  { path: "login", pathMatch: "full", component: LoginComponent, canActivate: [IsGuestGuard] },
  { path: "products/create", pathMatch: "full", component: AddProductComponent, canActivate: [LoggedInGuard] },
  { path: "products/cart", pathMatch: "full", component: CartComponent, canActivate: [LoggedInGuard] },
  { path: "products/:id", component: ProductPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
