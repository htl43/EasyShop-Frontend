import { Component, OnInit } from '@angular/core';
import {Color} from 'src/app/models/color';
import {Size} from 'src/app/models/size';
import {Category} from 'src/app/models/category';
import {Product}  from 'src/app/models/product';
import {ProductService} from 'src/app/services/product.service';
import { Cart } from 'src/app/models/cart';
import { User } from 'src/app/auth/authModel/user.model';
import { Subscription } from 'rxjs/Subscription';
import { AuthService } from 'src/app/auth/auth.service';


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
 

  isAuth = false;
  authSubscription: Subscription;

  constructor(private productService:ProductService, private authService: AuthService) { }

  ngOnInit(): void {
    this.products = this.productService.loadProduct();
    this.authSubscription = this.authService.authChange.subscribe(authStatus => {
      this.isAuth = authStatus;
    });
  }


  

  // sendcart() {
    
  //   console.log(this.isAuth)

  //   if(!this.isAuth){
  //     this.productService.navigateLogin();
  //   }else{
  //      alert(" you are already login ");
  //   }

  
    
  //   // alert("Please take product info!!");
  //     let cartitem = new Cart(120.00,this.cartDate,this.userObj,this.product);
  //     this.productService.addCartItem(cartitem).subscribe();
  // }

}
