import { Component, Input } from '@angular/core';
import { Product } from 'src/app/core/model';
import { ApiService } from 'src/app/features/services/api.service';
import { CartService } from 'src/app/features/services/cart.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  constructor(private apiService:ApiService,private CartService:CartService){}
  products!:Product[]
  ngOnInit(): void {
    this.apiService.getProducts().subscribe((data:Product[])=>{
         this.products=data
    })
  }

  addToCart(card:Product){
    this.CartService.addToCart(card)
    card.addedToCart = true;
  }
}
