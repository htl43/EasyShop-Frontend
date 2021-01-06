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

}
