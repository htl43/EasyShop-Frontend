import { Component, OnInit } from '@angular/core';
import { Cart } from '../models/cart';
import { CartService } from '../services/cart.service';

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

}
