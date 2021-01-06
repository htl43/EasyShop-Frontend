import { Component, OnInit } from '@angular/core';
import {Color} from 'src/app/models/color';
import {Size} from 'src/app/models/size';
import {Category} from 'src/app/models/category';
import {Product}  from 'src/app/models/product';
import {ProductService} from 'src/app/services/product.service';

@Component({
  selector: 'app-cellphone',
  templateUrl: './cellphone.component.html',
  styleUrls: ['./cellphone.component.css']
})
export class CellphoneComponent implements OnInit {

  public products:Product[];

  constructor(private productService:ProductService) { }

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
