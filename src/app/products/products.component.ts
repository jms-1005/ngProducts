import { Component, OnInit } from '@angular/core';
import { Product } from '../interfaces/prroducts.interface';
import { NodeserviceService } from '../services/nodeservice.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products:Product[] = [];

  constructor(private productService:NodeserviceService){}

  ngOnInit(): void {
      this.productService.getProductsFromMyNodeServer().subscribe( (products) =>{
        console.log(products);
        this.products = products;
      })
  }

}
