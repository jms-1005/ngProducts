import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../interfaces/prroducts.interface';
import { NodeserviceService } from '../services/nodeservice.service';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.scss']
})
export class ProductDescriptionComponent implements OnInit {
  productID:any = this.route.snapshot.paramMap.get('id');
  product:Product;

  constructor(private route:ActivatedRoute, private productService:NodeserviceService) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.paramMap.get('id'));
    this.productService.getProduct(this.productID).subscribe( (product) =>{
      this.product = product;
    })
  }

}
