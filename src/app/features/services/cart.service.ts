import { Injectable } from '@angular/core';
import { Product } from 'src/app/core/model';
import { BehaviorSubject, Observable } from 'rxjs';
import { ToastrServices } from './toastr.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartProduct: Product[] = [];
  private cartItemCount = new BehaviorSubject<number>(0);
  private readonly CART_STORAGE_KEY = 'cart_items';

  constructor(private ToastrService: ToastrServices) {
    this.loadCartFromLocalStorage();
  }

  private async loadCartFromLocalStorage(): Promise<void> {
    const cartItemsStr = localStorage.getItem(this.CART_STORAGE_KEY);
    if (cartItemsStr) {
      this.cartProduct = JSON.parse(cartItemsStr);
      this.updateCartItemCount();
    }
  }

  private saveCartToLocalStorage(): void {
    localStorage.setItem(this.CART_STORAGE_KEY, JSON.stringify(this.cartProduct));
  }

  private updateCartItemCount(): void {
    this.cartItemCount.next(this.cartProduct.length);
  }

  addToCart(product: Product): void {
    const existingProduct = this.cartProduct.find((item) => item.id === product.id);
    if (existingProduct && existingProduct.quantity) {
      existingProduct.quantity ++;
      this.ToastrService.showError('The product already exists in the cart, and its quantity has been incremented.');
    } else {
      this.cartProduct.push({ ...product, quantity: 1 });
      this.ToastrService.showSuccess(' Successfully added to cart.');
    }
    this.updateCartItemCount();
    this.saveCartToLocalStorage();
  }

  changeCartQuantity(id: number, quantity: number ,index:number): void {
    const existingProduct = this.cartProduct[index]
    if (existingProduct && existingProduct.id === id) {
      existingProduct.quantity = quantity;
        this.ToastrService.showSuccess('its quantity has been changed.');
    }
    this.updateCartItemCount();
    this.saveCartToLocalStorage();
  }

  removeFromCart(id: number): void {
    const index = this.cartProduct.findIndex((product) => product.id === id);
    if (index !== -1) {
      this.cartProduct.splice(index, 1);
      this.updateCartItemCount();
      this.ToastrService.showSuccess(' Successfully removed .');
      this.saveCartToLocalStorage();
    }
  }

  getCartItems(): Product[] {
    return this.cartProduct;
  }

  getCartItemCount(): Observable<number> {
    return this.cartItemCount.asObservable();
  }

  isProductInCart(isbn: number): boolean {
    return this.cartProduct.some((product) => product.id === isbn);
  }
}
