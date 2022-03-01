import { Component, OnInit } from '@angular/core';
// import { title } from 'process';
import { CartService } from '../service/cart.service';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
public productList : any;
//  public filterCategory : any;
//  searchKey:string="";
public pQuantity:number=1;
constructor(private api :ProductService , private CartService:CartService) { }
ngOnInit(): void {
    this.api.getProduct()
    .subscribe((res:any)=>{
      this.productList=res.productDetails;
      //  this.filterCategory= res.productDetails;
      this.productList.forEach((a:any) => {
        Object.assign(a,{quantity:this.pQuantity,total:a.price});
      });
    });

    //  this.CartService.search.subscribe(val=>{
    //    this.searchKey = val;
    //  })
}
addtoCart(productList : any, pQuantity:number=1){
  console.log(pQuantity);
  this.CartService.addtoCart(productList,pQuantity);
}
getProductByCat(categories:string){
  this.api.productByCat(categories)
  .subscribe((res:any)=>{
    this.productList=res.productDetails;
  });
}
}
