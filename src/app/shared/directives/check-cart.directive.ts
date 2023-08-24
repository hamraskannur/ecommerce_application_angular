// check-cart.directive.ts
import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { CartService } from 'src/app/features/services/cart.service';

@Directive({
  selector: '[appCheckCart]'
})
export class CheckCartDirective {
  constructor(
    private cartService: CartService,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}

  @Input() set appCheckCart(product: any) {
    const isInCart = this.cartService.isProductInCart(product.id);
    this.viewContainer.clear();
    if (isInCart) {
      this.viewContainer.createEmbeddedView(this.templateRef, { $implicit: isInCart });
    } else {
      this.viewContainer.createEmbeddedView(this.templateRef, { $implicit: isInCart });
    }
  }
}
