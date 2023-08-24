import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckCartDirective } from './directives/check-cart.directive';
import { CustomFilterPipe } from './pipe/custom-filter.pipe';
  
@NgModule({
  declarations: [
    CheckCartDirective,
    CustomFilterPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[CheckCartDirective,CustomFilterPipe]
})
export class SharedModule { }
