import { Component, OnInit } from '@angular/core';
import {Color} from 'src/app/models/color';
import {Size} from 'src/app/models/size';
import {Category} from 'src/app/models/category';
import {Product}  from 'src/app/models/product';
import {ProductService} from 'src/app/services/product.service';
import { AuthService } from 'src/app/auth/auth.service';
import { Cart } from 'src/app/models/cart';


@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css']
})
export class TVComponent implements OnInit {

  public products:Product[];
  public product:Product;

  public image:any;

  constructor(private productService:ProductService,private authService:AuthService) { }

  ngOnInit(): void {
    this.products = this.productService.loadProduct();
    this.getImage();
  }

  getAllProduct(){

    this.productService.getAllProduct().subscribe(
      (data:Product[]) => { 
        this.products = data;
      }
    )

  }

  getImage(){

    this.productService.getApiImage().subscribe(
      (data:any) => { 
        this.image = data;
      }
    )

  }



  searchBySize(value:any){

    
    // let selectProduct:Product[];
    // selectProduct = this.products.filter(item => item.size.id == value);
    // console.log(selectProduct);

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
          (response: any) => {console.log(response)})
        
         alert(" Item is added successfully !!");  
      
      //   if(Observable){
      //      alert(" Item is added successfully !!");
      //      this.productService.navigateCart();
      //   }else{
      //     alert(" Sorry !! Something Wrong !! please try again ");
      //  }

    }

  }



}
