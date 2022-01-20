import { ViewAllProductComponent } from './products/view-all-product/view-all-product.component';
import { ViewProductComponent } from './products/view-product/view-product.component';
import { ListOrderComponent } from './oders/list-order/list-order.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },
  {path:'', component: ViewAllProductComponent},
  { path: 'order', component:ListOrderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
