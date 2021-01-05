import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Color} from '../models/color';
import {Size} from '../models/size';
import {Category} from '../models/category';
import {Product}  from '../models/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  getAllProduct():Observable<Product[]>{
    return this.http.get("http://localhost:8080/EasyShop/getProduct") as Observable<Product[]>;
  }


}
