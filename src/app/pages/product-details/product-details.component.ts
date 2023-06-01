import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/Types/product';
import { FooterService } from 'src/app/services/footer.service';
import { NavbarService } from 'src/app/services/navbar.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product ! : Product
  id !: string
constructor(private singleProduct : ProductService, public activatedRoute : ActivatedRoute
  , public nav : NavbarService, public footer : FooterService){
   this.id = this.activatedRoute.snapshot.params['id']
   
}
ngOnInit(): void {
  this.nav.show()
  this.footer.show()
  this.singleProduct.getSingleProduct(this.id).subscribe((res : any)=>{
    this.product=res
  })
}

}
