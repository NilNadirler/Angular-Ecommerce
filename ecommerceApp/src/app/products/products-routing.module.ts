import { ViewAllProductComponent } from './view-all-product/view-all-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import { AddProductComponent } from './add-product/add-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { ViewProductByCategoryComponent } from './view-product-by-category/view-product-by-category.component';
import { ViewProductByDateComponent } from './view-product-by-date/view-product-by-date.component';



const routes: Routes = [
  { path: '', component: ViewAllProductComponent },
  //{ path: 'list-product', component: ViewAllProductComponent },
  { path: 'update-product/:id', component: UpdateProductComponent },
  { path: 'add-product', component: AddProductComponent },
  { path: 'delete-product', component: DeleteProductComponent },
  {path:  'searchdate', component:ViewProductByDateComponent},
  {path:  'view-product/:id', component:ViewProductComponent},
  {path:  'search', component:ViewProductByCategoryComponent},
  
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
