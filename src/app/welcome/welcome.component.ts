import { Component, OnInit } from '@angular/core';
import {Color} from '../models/color';
import {Size} from '../models/size';
import {Category} from '../models/category';
import {Product}  from '../models/product';
import {ProductService} from '../services/product.service';



@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  public products:Product[];

  constructor( private productService:ProductService) { }

  ngOnInit(): void {
    this.getAllProduct();
  }

  getAllProduct(){

    this.productService.getAllProduct().subscribe(
      (data:Product[]) => { 
        this.products = data;
      }
    )

  }


}
