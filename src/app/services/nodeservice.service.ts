import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfaces/prroducts.interface';

@Injectable({
  providedIn: 'root'
})
export class NodeserviceService {
  private url = "http://localhost:4400/products";
  constructor(private nodehttp:HttpClient) { }

  getProductsFromMyNodeServer(){
    return this.nodehttp.get<Product[]>(this.url);
  }

}
