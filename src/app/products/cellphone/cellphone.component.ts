import { Component, OnInit } from '@angular/core';
import {Color} from 'src/app/models/color';
import {Size} from 'src/app/models/size';
import {Category} from 'src/app/models/category';
import {Product}  from 'src/app/models/product';
import {ProductService} from 'src/app/services/product.service';
import { Cart } from 'src/app/models/cart';
import { User } from 'src/app/auth/authModel/user.model';

@Component({
  selector: 'app-cellphone',
  templateUrl: './cellphone.component.html',
  styleUrls: ['./cellphone.component.css']
})
export class CellphoneComponent implements OnInit {

  public products:Product[];
  public cellProduct:Product[];
  public cart:Cart;
  private finalPrice:number;
  private cartDate:Date;
  private user:User;
  private product:Product;

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.getAllProduct();
  }

  getAllProduct(){
    this.productService.getAllProduct().subscribe(
      (data:Product[]) => { 
        this.products = data;
      }
    )
  }

  

  sendcart() {
     alert("Please take product info!!");
    // let cartitem = new Cart(this.finalPrice,this.cartDate,this.user,this.product);
    // this.productService.addCartItem(cartitem).subscribe();
  }

}
