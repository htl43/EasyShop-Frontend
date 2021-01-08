import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from '../models/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {
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


}
