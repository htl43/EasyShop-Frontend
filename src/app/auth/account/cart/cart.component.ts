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
export class CartComponent implements OnInit, OnChanges {

  public cartItems:Cart[];
  cartSubcription: Subscription;
  user: User;

  constructor(private cartservice:CartService, private authService: AuthService) { }
  
  ngOnInit(): void {
    this.getAllCartItems();
  }

  OnChanges(id: number) {
    return this.cartItems = this.cartItems.filter(cart=> cart.cartId != id);
  }

  getAllCartItems(){
    this.user = this.authService.getUser();
    if(this.user.userCartItem) {
       this.cartItems = this.user.userCartItem;
    } 
  }

  removeItem(cart: any) {
    if(cart) {
      for(var index in this.cartItems) {
        if(cart.cartId===this.cartItems[index].cartId) {
          // let newArray = Object.assign([], this.cartItems);
          // delete newArray[index];
          this.cartItems = this.OnChanges(cart.cartId);
          this.authService.RemoveItem(this.cartItems).subscribe(
            data => {
              this.user = data;
              console.log(this.user);
            }
          )   
        }
      }
    }

  }

}
