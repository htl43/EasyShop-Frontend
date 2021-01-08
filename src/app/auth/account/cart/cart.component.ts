import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { emit } from 'process';
=======
import { NgForm } from '@angular/forms';
>>>>>>> f22a24d4fdcb5b41e983a1a6716e5626f70c8c8f
import { Cart } from 'src/app/models/cart';
import { CartService } from 'src/app/services/cart.service';
import { AuthService } from '../../auth.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public cartItems:Cart[];
  cartSubcription: Subscription;

  constructor(private cartservice:CartService, private authService: AuthService) { }

  cart: Cart;
  ngOnInit(): void {
    this.getAllCartItems();
  }

  getAllCartItems(){
    let user = this.authService.getUser();
    if(user) {
       this.cartItems = user.userCartItem;
    } 
    // this.cartservice.getAllCartItems().subscribe(
    //   (data:Cart[]) => {
    //     this.cartItems = data;
    //   }
    // )
  }

  removeItem(cart: any) {
    console.log("button click");
    console.log(cart);
  }

  removeItem(){
    this.cartservice.removeCartItem(); //how to get the emit() in the method argument
  }

}
