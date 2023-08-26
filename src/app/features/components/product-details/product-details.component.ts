import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/core/model';
import { ApiService } from '../../services/api.service';
import { CartService } from '../../services/cart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnDestroy {
  public id !:number
  public product!:Product
  subscription1: Subscription | undefined;
  subscription2: Subscription | undefined;

constructor(private route: ActivatedRoute,private apiService:ApiService,private CartService:CartService){}

ngOnInit(){
  this.subscription1= this.route.params.subscribe(params => {
    this.id = params['id'];     
    this.subscription2=this.apiService.getProductDetails(this.id).subscribe((data:Product)=>{         
       this.product=data; 
       this.product.addedToCart=this.CartService.isProductInCart(data.id)
    })
  });
}

addToCart(card: Product) {
  this.CartService.addToCart(card)
  card.addedToCart=true
}


ngOnDestroy(): void {
  this.subscription1?.unsubscribe()
  this.subscription2?.unsubscribe()
}
}
