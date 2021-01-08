import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-computer',
  templateUrl: './computer.component.html',
  styleUrls: ['./computer.component.css']
})
export class ComputerComponent implements OnInit {

 
  public products:Product[];
  public product:Product;
 

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.products = this.productService.loadProduct();
  }

  getAllProduct(){

    this.productService.getAllProduct().subscribe(
      (data:Product[]) => { 
        this.products = data;
      }
    )

  }



  // loadProductsForSearch(){
  //   this.cellProducts = this.products;
  // }

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
