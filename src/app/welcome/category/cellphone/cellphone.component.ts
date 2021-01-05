import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-cellphone',
  templateUrl: './cellphone.component.html',
  styleUrls: ['./cellphone.component.css']
})
export class CellphoneComponent implements OnInit {
  cellphones: Product[];
  allProducts: any;
  constructor(private productService: ProductService) { }

  ngOnInit(): void {  
    this.allProducts = this.productService.loadProduct();
    for(let p of this.allProducts) {
      console.log(p);
    }
  }

}
