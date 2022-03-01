import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService


{
public APIUrl:string="https://localhost:44385/api/Products/";

   productByCat(categories: string) {
     return this.http.get<any>("https://localhost:44385/api/Products/get_product_by_category/" + categories)
       .pipe(map((res: any) => { return res; }))
   }

  constructor(private http: HttpClient) { }
  getProduct() {
    return this.http.get<any>(this.APIUrl+"get_all_products")
      .pipe(map((res: any) => { return res; }))
  }
  postProduct(productobj : any) {
    return this.http.post<any>(this.APIUrl+"addProduct", productobj)
      .pipe(map((res: any) => { return res; }))
  }
  updateProduct(data : any) {
    return this.http.put<any>(this.APIUrl+"updateProduct", data)
      .pipe(map((res: any) => { return res; }))
  }
  deleteProduct(id: number) {
    return this.http.delete<any>(this.APIUrl+"deleteProduct/"+ id)
      .pipe(map((res: any) => { return res; }))
  }
  getProductByuserid(id: number) {
    return this.http.get<any>(this.APIUrl+"get_product_by_userid/" + id)
      .pipe(map((res: any) => { return res; }))

  }

  getProductbySearch(title:string){
    return this.http.get<any>(this.APIUrl+"SearchProduct/" + title)
    .pipe(map((res: any) => { return res; }))
  }

}
