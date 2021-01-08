import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Color} from 'src/app/models/color';
import {Size} from 'src/app/models/size';
import {Category} from 'src/app/models/category';
import {Product}  from 'src/app/models/product';
import {ProductService} from 'src/app/services/product.service';
import { Cart } from 'src/app/models/cart';
import { User } from 'src/app/auth/authModel/user.model';
import { Subscription } from 'rxjs/Subscription';
import { AuthService } from 'src/app/auth/auth.service';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-cellphone',
  templateUrl: './cellphone.component.html',
  styleUrls: ['./cellphone.component.css']
})
export class CellphoneComponent implements OnInit {

  @Output() trainingStart = new EventEmitter<void>();

  public products:Product[];
  public cellProducts:Product[];
  public cart:Cart;
  public  finalPrice:number;
  public cartDate:Date;
  public productId:number;

  public product:Product;
  public esUser:User;

  public searchBySizeObj:any;

 
 

  isAuth = false;
  authSubscription: Subscription;

  constructor(private productService:ProductService, private authService: AuthService) { }

  ngOnInit(): void {
    this.cellProducts = this.productService.loadProduct();
    this.products = this.productService.loadProduct();
    this.authSubscription = this.authService.authChange.subscribe(authStatus => {
      this.isAuth = authStatus;
    });
  }


  

  sendcart(product:Product) {

    let user = this.authService.getUser();

    if(!user){
      alert(" You have not logined in  !! Please login in first before add items in cart !!!");
      this.productService.navigateLogin();
    }else{
      console.log(user)
      console.log(product);
  
       let cartitem = new Cart(product.unitPrice,new Date(),user,product);
  
        console.log(cartitem);
        this.productService.addCartItem(cartitem).subscribe(
        (data:Cart) => { this.cart = data; }
        )
       
        if(true){
        alert(" Item is added successfully !!");
        this.productService.navigateCart();
        }else{
        alert(" Sorry !! Something Wrong !! please try again ");
       }

    }

  }
 
  loadProductsForSearch(){
    this.cellProducts = this.products;
  }

  searchBySize(value:any){


    // let selectProduct:Product[];
    // selectProduct = this.products.filter(item => item.size.id == value);
    // console.log(selectProduct);

   
    this.loadProductsForSearch();
    let arrayValue = [value];
    this.productService.storeProduct(arrayValue)
    this.ngOnInit();


    console.log(value);

  }

  searchByColor(value:any){

    let arrayValue = [value];
    this.productService.storeProduct(arrayValue)
    this.ngOnInit();

  }

}
