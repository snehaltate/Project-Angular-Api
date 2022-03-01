import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule } from '@angular/material/menu';
import{ MatGridListModule } from '@angular/material/grid-list';
import{ MatButtonModule } from "@angular/material/button";
import{ MatFormFieldModule } from '@angular/material/form-field';
import{MatSelectModule} from '@angular/material/select';
import{MatTableModule} from '@angular/material/table';
// import { MatLabel } from '@angular/material/form-field/label';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import{MatBadgeModule} from '@angular/material/badge';
// import { MatDialogContent } from '@angular/material/dialog';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './admin/admin.component';
import { AdministratorComponent } from './administrator/administrator.component';
import { AddProductComponent } from './administrator/add-product/add-product.component';
import { UpdateProductComponent } from './administrator/update-product/update-product.component';
import { ViewProductComponent } from './administrator/view-product/view-product.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HeaderComponent,
    FooterComponent,
    ProductComponent,
    CartComponent,
    AdminComponent,
    AdministratorComponent,
    AddProductComponent,
    UpdateProductComponent,
    ViewProductComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    HttpClientModule,
    MatMenuModule,
    MatGridListModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatTableModule,
    MatBadgeModule,
    //  MatLabel,

    MatInputModule,
    MatDialogModule,
    FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
