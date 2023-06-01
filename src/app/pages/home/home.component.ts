import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Types/product';
import { CategoryService } from 'src/app/services/category.service';
import { FooterService } from 'src/app/services/footer.service';
import { NavbarService } from 'src/app/services/navbar.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  
  productsArray : Product [] = []
  categories : any[] =[]
  p: number =1
  itemsPerPage : number = 6
  totalProducts !: number
  constructor(public nav : NavbarService, public footer : FooterService, private productService : ProductService,private categoryService : CategoryService){}

  ngOnInit(): void {
    this.nav.show()
    this.allProducts()
    this.categoryService.getAllCategories().subscribe((res : any)=>{
      this.categories=res
      console.log(this.categories);
      
    })
  }
  filteredProducts(e: any){
    this.categoryService.filteredProducts(e.target.innerHTML).subscribe((res : any)=>{
      this.productsArray = res
      console.log(this.productsArray)
    })
    // this.filteredProductsArray=this.productsArray.filter(product=>product.category==e.target.innerHTML)
    // console.log("bhbhh")
    // this.filter=true
  }
  allProducts(){
    this.productService.getAllProducts().subscribe((res : any)=>{
      this.productsArray=res
      this.totalProducts = res.length
       })
  }
}
