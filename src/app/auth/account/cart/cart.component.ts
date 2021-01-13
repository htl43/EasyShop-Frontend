import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Cart } from 'src/app/models/cart';
import { CartService } from 'src/app/services/cart.service';
import { AuthService } from '../../auth.service';
import { Subscription } from 'rxjs/Subscription';
import { User } from '../../authModel/user.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public cartItems:Cart[];
  cartSubcription: Subscription;
  user: User;

  constructor(private cartservice:CartService, private authService: AuthService) { }
  
  ngOnInit(): void {
    this.getAllCartItems();
  }

  OnChanges(removeCart: Cart) {
    return this.cartItems = this.cartItems.filter(cart=> cart.cartId != removeCart.cartId);
  }

  getAllCartItems(){
    this.user = this.authService.getUser();
    if(this.user.userCartItem) {
       this.cartItems = this.user.userCartItem;
    } 
  }

  removeItem(cart: any) {
    if(cart) {
      console.log("Get Remove Cart" + JSON.stringify(cart));
      for(var index in this.cartItems) { 
        if(cart.cartId==this.cartItems[index].cartId) {
          let removeCart = cart;
          this.cartItems = this.OnChanges(removeCart);
          this.authService.RemoveItem(removeCart).subscribe(
            (data: Cart) => {
              console.log("Cart is remove successfully" + data);
            }
          );

        }
      }
    }
  }
  // removeItem(cart: Cart) {
  //   console.log("button click");
  //   console.log(cart);
  //   let user = this.authService.getUser();
  //   let id = cart.cartId
  //       console.log(id);
  //       console.log(user.userCartItem);
  //   delete user.userCartItem[id-1];
  //       console.log(user.userCartItem);

  //  this.getAllCartItems();
  // }



}
