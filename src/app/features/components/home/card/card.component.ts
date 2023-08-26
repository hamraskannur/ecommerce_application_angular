import { Component, Input,OnDestroy } from '@angular/core';
import { Subscription, map, switchMap } from 'rxjs';
import { ActivatedRoute } from '@angular/router'; // Import ActivatedRoute

import { Product } from 'src/app/core/model';
import { ApiService } from 'src/app/features/services/api.service';
import { CartService } from 'src/app/features/services/cart.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnDestroy {
  @Input() searchData:string=''
  subscription1: Subscription | undefined;

  constructor(private apiService:ApiService,private CartService:CartService,  private route: ActivatedRoute   ){}
  products!:Product[]
  ngOnInit(): void {
    this.subscription1=this.route.paramMap.pipe(
      switchMap((params) => {
        const category = params.get('category');         
        if (category) {
          return this.apiService.getCategoryProducts(category);
        } else {
          return this.apiService.getProducts();
        }
      })
    ).subscribe((data: Product[]) => {
      this.products = data;
    });
  }

  addToCart(card:Product){
    this.CartService.addToCart(card)
    card.addedToCart = true;
  }

  ngOnDestroy(): void {
    this.subscription1?.unsubscribe()
  }
}
