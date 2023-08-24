import { TemplateRef, ViewContainerRef } from '@angular/core';
import { CheckCartDirective } from './check-cart.directive';

describe('CheckCartDirective', () => {
  it('should create an instance', () => {
    const cartServiceMock = jasmine.createSpyObj('CartService', ['isBookInCart']);
    const templateRefMock = {} as TemplateRef<any>;
    const viewContainerMock = {} as ViewContainerRef;
    const directive = new CheckCartDirective(
      cartServiceMock,
      templateRefMock,
      viewContainerMock
    );
    expect(directive).toBeTruthy();
  })
})
