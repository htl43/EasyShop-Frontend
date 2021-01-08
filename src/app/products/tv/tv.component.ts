import { Component, OnInit } from '@angular/core';
import {Color} from 'src/app/models/color';
import {Size} from 'src/app/models/size';
import {Category} from 'src/app/models/category';
import {Product}  from 'src/app/models/product';
import {ProductService} from 'src/app/services/product.service';


@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css']
})
export class TVComponent implements OnInit {

  public products:Product[];
  public product:Product;

  public image:any;

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.products = this.productService.loadProduct();
    this.getImage();
  }

  getAllProduct(){

    this.productService.getAllProduct().subscribe(
      (data:Product[]) => { 
        this.products = data;
      }
    )

  }

  getImage(){

    this.productService.getApiImage().subscribe(
      (data:any) => { 
        this.image = data;
      }
    )

  }



  searchBySize(value:any){

    
    // let selectProduct:Product[];
    // selectProduct = this.products.filter(item => item.size.id == value);
    // console.log(selectProduct);

    let arrayValue = [value];
    this.productService.storeProduct(arrayValue)
    this.ngOnInit();


    console.log(value);

  }

  searchByColor(value:any){

    let arrayValue = [value];
    this.productService.storeProduct(arrayValue)
    this.ngOnInit();

  }




}
