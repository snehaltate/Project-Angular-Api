import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { AdministratorComponent } from './administrator/administrator.component';
import { AddProductComponent } from './administrator/add-product/add-product.component';
import { ViewProductComponent } from './administrator/view-product/view-product.component';
// import { AdminComponent } from './admin/admin.component';

// import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  {path:'', redirectTo:'products',pathMatch:'full'},
  {path:'products', component: ProductComponent},
  {path:'cart', component: CartComponent},
  {path:'administrator', component:AdministratorComponent},
  {path: 'add-product', component:AddProductComponent},
  {path: 'view-product', component:ViewProductComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
