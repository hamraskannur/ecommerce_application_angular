import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OneCartComponent } from './one-cart.component';
import { ToastrServices } from 'src/app/features/services/toastr.service';
import { ToastrService } from 'ngx-toastr';
import { FormsModule } from '@angular/forms'; // Import FormsModule

describe('OneCartComponent', () => {
  let component: OneCartComponent;
  let fixture: ComponentFixture<OneCartComponent>;

  const toastrServiceMock: Partial<ToastrServices> = {
    showSuccess: (message: string) => {},
    showError: (message: string) => {}
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[FormsModule],
      declarations: [OneCartComponent],
      providers: [
        { provide: ToastrServices, useValue: toastrServiceMock },
        ToastrService
      ]
    });
    fixture = TestBed.createComponent(OneCartComponent);
    component = fixture.componentInstance;

    component.cart = {  
      id: 1,
      title: 'Sample Product',
      category: 'Sample Category',
      description:"kokokoko",
      price: 19.99,
      image: 'sample-image.jpg',
      quantity: 2,
      rating: { rate: 1, count: 1 },
      addedToCart:false
     };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
