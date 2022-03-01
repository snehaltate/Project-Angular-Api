import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';
import { ProductModel } from 'src/app/product/Iproduct';

export interface DialogData {
  productList: any;

}
@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})

export class ViewProductComponent implements OnInit {

  productList: any;
  displayedColumns: string[] = ['index', 'ptitle', 'image', 'descp', 'price', 'catg', 'action'];
  constructor(private api: ProductService, private route: Router, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getProductByUid();
  }

  getAllProducts() {
    this.api.getProduct()
      .subscribe((res: any) => {
        this.productList = res;
      })
  }
  getProductByUid() {
    this.api.getProductByuserid(parseInt(localStorage.getItem('token') as string))
      .subscribe((res: any) => {
        this.productList = res.productDetails;
      })
  }
  deleteProduct(product: any) {
    var productid = product.id
    this.api.deleteProduct(productid).subscribe((res: any) => {
      alert('product deleted');
      this.getProductByUid();

      this.route.navigate(["/view-product"]);
    })
  }

  openDialog(product: any): void {
    const dialogRef = this.dialog.open(UpdateProductComponent, {

      width: '50%',
      data: { productList: product },
    });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    //   // this.animal = result;
    // });
  }
}
@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.html',
})
export class UpdateProductComponent {

  updateProductForm!: FormGroup;
  showAdd !: boolean;
  showUpdate !: boolean;
  productList!: any;

  public productobj:ProductModel = new ProductModel();
  constructor(private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<UpdateProductComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private api: ProductService,
  ) { }
  ngOnInit(): void {
    this.updateProductForm = this.formBuilder.group({
      title: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required, Validators.minLength(10)]),
      categories: new FormControl('', [Validators.required]),
      image: new FormControl('', [Validators.required])
    })

  }
  // updateProduct() {
  //   if (this.updateProductForm.valid) {
  //     // console.log(this.updateProductForm.value)
  //     this.api.updateProduct(this.updateProductForm.value)
  //       .subscribe((res) => {
  //         alert("Product Added Successfully");
  //         this.onNoClick();
  //       })
  //   }
  // }
  onNoClick(): void {
     this.dialogRef.close();
   }
   getAllProducts() {
    this.api.getProduct()
      .subscribe((res: any) => {
        this.productList = res.productDetails;
      })
  }
  updateProduct()
  {
    // this.productobj.userid = parseInt(localStorage.getItem('token') as string);
    this.productobj.id=this.updateProductForm.value.id;
    this.productobj.title=this.updateProductForm.value.title;
this.productobj.description=this.updateProductForm.value.description;
this.productobj.categories=this.updateProductForm.value.categories;
this.productobj.price=this.updateProductForm.value.price;
this.productobj.image=this.updateProductForm.value.image;
this.api.updateProduct(this.updateProductForm.value)
    .subscribe(res=>{
      alert("Updated Successfully")
      this.updateProductForm.reset();
      this.getAllProducts();
      let ref = document.getElementById('cancel');
      ref?.click();
        })
  }
  onUpdate(row : any){
    this.productobj.id = row.id;
    this.updateProductForm.controls['title'].setValue(row.title);
    this.updateProductForm.controls['description'].setValue(row.description);
    this.updateProductForm.controls['categories'].setValue(row.categories);
    this.updateProductForm.controls['price'].setValue(row.price);
    this.updateProductForm.controls['image'].setValue(row.image);
    this.showUpdate = true;
    this.showAdd = false;
  }
}
