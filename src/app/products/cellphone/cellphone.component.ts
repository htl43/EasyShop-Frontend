import { Component, OnInit } from '@angular/core';
import {Color} from 'src/app/models/color';
import {Size} from 'src/app/models/size';
import {Category} from 'src/app/models/category';
import {Product}  from 'src/app/models/product';
import {ProductService} from 'src/app/services/product.service';
<<<<<<< HEAD
import { Cart } from 'src/app/models/cart';
import { User } from 'src/app/auth/authModel/user.model';
=======
import { AuthService } from '../../auth/auth.service';
import { Subscription } from 'rxjs/Subscription';
>>>>>>> 888fe1cb829c92e889237f697d8adfb674ad7ab5

@Component({
  selector: 'app-cellphone',
  templateUrl: './cellphone.component.html',
  styleUrls: ['./cellphone.component.css']
})
export class CellphoneComponent implements OnInit {
  isAuth = false;
  authSubscription: Subscription;
  public products:Product[];
  public cellProduct:Product[];
  public cart:Cart;
  private finalPrice:number;
  private cartDate:Date;
  private user:User;
  private product:Product;

  constructor(private productService:ProductService, private authService: AuthService) { }

  ngOnInit(): void {
    this.products = this.productService.loadProduct();
    this.authSubscription = this.authService.authChange.subscribe(authStatus => {
      this.isAuth = authStatus;
    });
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
