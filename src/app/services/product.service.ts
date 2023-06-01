import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  limitAPI = 'https://fakestoreapi.com/products?limit=6'
singleProduct = 'https://fakestoreapi.com/products/'
getAllProductsAPI = 'https://fakestoreapi.com/products'
  constructor(private http : HttpClient) { }
  getLimitedProducts(){
    return this.http.get(this.limitAPI)
  }
  getSingleProduct(id : any){
     return this.http.get(this.singleProduct+`${id}`)
  }
  getAllProducts(){
    return this.http.get(this.getAllProductsAPI)
  }
}
