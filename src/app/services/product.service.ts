import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Color} from '../models/color';
import {Size} from '../models/size';
import {Category} from '../models/category';
import {Product}  from '../models/product';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[];

  constructor(private http:HttpClient, private router: Router) { }

  getAllProduct():Observable<Product[]>{
    return this.http.get("http://localhost:8080/EasyShop/getProduct") as Observable<Product[]>;
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

}
