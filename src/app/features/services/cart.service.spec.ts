import { TestBed } from '@angular/core/testing';

import { CartService } from './cart.service';
import { ToastrServices } from './toastr.service';
import { ToastrModule } from 'ngx-toastr';

describe('CartService', () => {
  let service: CartService;
  let toastrServiceMock: Partial<ToastrServices>; // Using a partial mock

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ToastrModule.forRoot()],
      providers: [
        CartService,
        { provide: ToastrServices, useValue: toastrServiceMock }, // Provide the mock ToastrService
      ],
    });
    service = TestBed.inject(CartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
