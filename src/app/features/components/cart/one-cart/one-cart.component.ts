import { Component, Input } from '@angular/core';
import { Product } from 'src/app/core/model';
import { CartService } from 'src/app/features/services/cart.service';

@Component({
  selector: 'app-one-cart',
  templateUrl: './one-cart.component.html',
  styleUrls: ['./one-cart.component.css']
})
export class OneCartComponent {
  @Input() cart!: Product;
  @Input() index!: number
  public quantity:number = 1;

  constructor(private CartService:CartService){}
  ngOnInit() {
    if(this.cart.quantity){
      this.quantity = this.cart.quantity 
    }else{
      this.quantity =1
    }
  }
  decrement(id:number) {
    if (this.quantity !== 1) {
      this.quantity--;
      this.CartService.changeCartQuantity(id,this.quantity,this.index)
    }
  }

  increment(id:number) {
    this.quantity++;
    this.CartService.changeCartQuantity(id,this.quantity,this.index)
  }

  removeBook(id:number) {
    this.CartService.removeFromCart(id)
  }
  updateQuantity(id:number) {
    if (this.quantity <= 0) {
      this.quantity = 1;
    }
    this.CartService.changeCartQuantity(id,this.quantity,this.index)
  }
}
