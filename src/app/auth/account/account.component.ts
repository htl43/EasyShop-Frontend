import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  tabIndex:number;
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    
  }

}
