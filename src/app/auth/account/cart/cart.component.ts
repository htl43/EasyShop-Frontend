import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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

  deleteCart(form: NgForm){
    //TO FILL WITH ADD TO CART FUNCTIONALITY
    
  }

}
