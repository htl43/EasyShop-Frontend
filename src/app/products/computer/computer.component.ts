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

    this.productService.getApiImageComputer().subscribe(
      (data:any) => { 
        this.image = data;
      }
    )

  }

}
