import { Component, OnInit } from '@angular/core';
import { emit } from 'process';
import { Cart } from 'src/app/models/cart';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public cartItems:Cart[];

  constructor(private cartservice:CartService) { }

  ngOnInit(): void {
    this.getAllCartItems();
  }

  getAllCartItems(){

    this.cartservice.getAllCartItems().subscribe(
      (data:Cart[]) => {
        this.cartItems = data;
      }
    )
  }

  addToCart(){
    //TO FILL WITH ADD TO CART FUNCTIONALITY
  }

  removeItem(){
    this.cartservice.removeCartItem(); //how to get the emit() in the method argument
  }

}
