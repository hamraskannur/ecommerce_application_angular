import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartComponent } from './cart.component';
import { ToastrServices } from '../../services/toastr.service';
import { ToastrService } from 'ngx-toastr';
import { HeaderComponent } from 'src/app/core/components/header/header.component';
import { FooterComponent } from '../home/footer/footer.component';
import { StoreModule } from '@ngrx/store';
import { OneCartComponent } from './one-cart/one-cart.component';
import { EmptyCartComponent } from './empty-cart/empty-cart.component';
import { FormsModule } from '@angular/forms';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;
  let toastrServiceMock: Partial<ToastrServices>; // Using a partial mock

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[StoreModule.forRoot({}),FormsModule],

      declarations: [CartComponent,OneCartComponent,EmptyCartComponent,HeaderComponent,FooterComponent],
      providers: [{ provide: ToastrServices, useValue: toastrServiceMock }, ToastrService]
    });
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
