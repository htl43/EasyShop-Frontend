import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Color} from '../models/color';
import {Size} from '../models/size';
import {Category} from '../models/category';
import {Product}  from '../models/product';
import { Observable } from 'rxjs';
import { Cart } from '../models/cart';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[];
  private cart:Cart;

  constructor(private http:HttpClient) { }

  getAllProduct():Observable<Product[]>{
    return this.http.get("http://localhost:8080/EasyShop/getProduct") as Observable<Product[]>;
  }


  addCartItem(cart:Cart):Observable<Cart>{
    let body:Cart = cart;
    return this.http.post<Cart>("http://localhost:8080/EasyShop/addToCart",body) as Observable<Cart>
}

  storeProduct(product: Product[]) {
    this.products = product;
  } 

  loadProduct(): Product[] {
    return this.products;
  }


}
