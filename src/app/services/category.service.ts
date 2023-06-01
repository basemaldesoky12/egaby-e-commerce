import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  
  getAllCategoriesAPI ='https://fakestoreapi.com/products/categories'
  getInCategory = 'https://fakestoreapi.com/products/category/'
  constructor(private http : HttpClient) { }
  getAllCategories(){
    return this.http.get(this.getAllCategoriesAPI)
  }
  filteredProducts(categoryName : string)
  {
     return this.http.get(this.getInCategory+`${categoryName}`)
  }
}
