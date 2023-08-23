import { Component } from '@angular/core';
import { Product } from 'src/app/core/model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cartItem:Product[]=[]
  constructor(private CartService:CartService){}
  
  ngOnInit() {
   this.cartItem= this.CartService.getCartItems()
  }
  
}
