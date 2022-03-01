import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ProductModel } from 'src/app/product/Iproduct';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})

export class AddProductComponent implements OnInit {
  addProductForm !: FormGroup;
  public productobj:ProductModel = new ProductModel();
  constructor(private formBuilder: FormBuilder, private api: ProductService, private route: Router) { }

  ngOnInit(): void {
    this.addProductForm = this.formBuilder.group({
      title: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required, Validators.minLength(10)]),
      categories: new FormControl('', [Validators.required]),
      image: new FormControl('', [Validators.required])
      // createdAt: new FormControl('',[Validators.required])
    })
  }

  addProduct() {
    // if (this.addProductForm.valid) {
    //   this.addProductForm.value.userid = parseInt(localStorage.getItem('token') as string);
    //   this.api.postProduct(this.addProductForm.value)
    //     .subscribe({
    //       next: (res) => {
    //         alert("Product Added Successfully");
    //         this.addProductForm.reset();
    //         this.route.navigate(["/products"]);
    //       }
    //     })
    // }
this.productobj.title=this.addProductForm.value.title;
this.productobj.description=this.addProductForm.value.description;
this.productobj.categories=this.addProductForm.value.categorie;
this.productobj.price=this.addProductForm.value.price;
this.productobj.image=this.addProductForm.value.image;
// this.productobj.createdAt=this.addProductForm.value.createdAt;
// this.productobj.updatedAt=this.addProductForm.value.updatedAt;

    this.api.postProduct(this.addProductForm.value)
    .subscribe(res=>{
      alert(res.message)
      this.addProductForm.reset();
      this.route.navigate(["/products"]);
    })
  }
}
