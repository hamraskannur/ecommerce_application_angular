import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/core/model';
import { ApiService } from '../../services/api.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  public id !:number
  public product!:Product
constructor(private route: ActivatedRoute,private apiService:ApiService,private CartService:CartService){}

ngOnInit(){
  this.route.params.subscribe(params => {
    this.id = params['id'];     
    this.apiService.getProductDetails(this.id).subscribe((data:Product)=>{         
       this.product=data; 
       this.product.addedToCart=this.CartService.isProductInCart(data.id)
    })
  });
}

addToCart(card: Product) {
  this.CartService.addToCart(card)
  card.addedToCart=true
}


}
