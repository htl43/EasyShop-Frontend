import { HttpClient, HttpXsrfTokenExtractor } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from '../models/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cats:Cart[];

  options = {
    headers: new HttpHeaders({
        'Content-Type' : 'application/json'
    }),
    withCredentials: true
};
  constructor(private http:HttpClient) { }

  getAllCartItems():Observable<Cart[]>{
    return this.http.get("http://localhost:8080/EasyShop/viewCart", this.options) as Observable<Cart[]>;
  }

  addCartItem():void{

  }

  removeCartItem(cart:Cart): Observable<Cart>{
    let body: Cart = cart;
    return this.http.post<Cart>('http://localhost:8080/EasyShop/removeCartItem', body) as Observable<Cart>;
  }


}
