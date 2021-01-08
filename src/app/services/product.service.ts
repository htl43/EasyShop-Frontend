import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Color} from '../models/color';
import {Size} from '../models/size';
import {Category} from '../models/category';
import {Product}  from '../models/product';
import { Observable } from 'rxjs';
import { Cart } from '../models/cart';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[];
  cellphone: Product[];
  private cart:Cart;

  constructor(private http:HttpClient, private router: Router) { }

  getAllProduct():Observable<Product[]>{
    return this.http.get("http://localhost:8080/EasyShop/getProduct") as Observable<Product[]>;
  }


  addCartItem(cart:Cart):Observable<Cart>{
    let body:Cart = cart;
    return this.http.post<Cart>("http://localhost:8080/EasyShop/addToCart",body) as Observable<Cart>
}
  
  storeCellphone(cell: Product[]) {
    this.cellphone = cell;
  }

  
  storeProduct(product: Product[]) {
    this.products = product;
    console.log(this.products);
  } 

  loadProduct(): Product[] {
    return this.products;
  }

  navigateLogin(): void {
    this.router.navigate(['/login']);
  }

  navigateCart(): void {
    this.router.navigate(['/cart']);
  }

  getApiImage():Observable<any>{
    return this.http.get("https://fakestoreapi.com/products/14") as Observable<any>;
  }

  getApiImageComputer():Observable<any>{
    return this.http.get("https://fakestoreapi.com/products/13") as Observable<any>;
  }

}
