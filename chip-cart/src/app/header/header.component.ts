import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';
// import { Products } from '../product/Iproduct';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
// list=Products;
public totalItem : number = 0;

  constructor(private CartService:CartService) { }

  ngOnInit(): void {
    this.CartService.getProductList()
    .subscribe(res=>{
      this.totalItem = res.length;
    })
  }


}
