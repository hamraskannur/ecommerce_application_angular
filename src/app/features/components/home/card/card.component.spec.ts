import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { ActivatedRoute, RouterModule, convertToParamMap } from '@angular/router';
import { of } from 'rxjs';

import { ToastrServices } from 'src/app/features/services/toastr.service';
import { CardComponent } from './card.component';
import { CustomFilterPipe } from '../../../../shared/pipe/custom-filter.pipe';
import { Product } from 'src/app/core/model';
import { ApiService } from 'src/app/features/services/api.service';
import { CartService } from 'src/app/features/services/cart.service';
import { ToastrModule } from 'ngx-toastr';
import { CheckCartDirective } from 'src/app/shared/directives/check-cart.directive';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;
  let toastrServiceMock: Partial<ToastrServices>;
  let mockApiService: jasmine.SpyObj<ApiService>;

  const mockProducts: Product[] = [
    {
      id: 1,
      title: '...',
      price: 555,
      category: '...',
      description: '...',
      image: '...',
      rating: { rate: 5, count: 4 },
    },
  ];
  let apiSpy = jasmine.createSpyObj('ApiService', [
    'getCategoryProducts',
    'getProducts',
  ]);

  beforeEach(() => {
    const mockActivatedRoute = {
      paramMap: of(convertToParamMap({ category: 'jewelery' })), // Adjust the paramMap value as needed
    };

    TestBed.configureTestingModule({
      imports: [HttpClientModule,RouterModule],
      declarations: [CardComponent, CustomFilterPipe,CheckCartDirective],
      providers: [
        { provide: ToastrServices, useValue: toastrServiceMock },
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: ApiService, useValue: apiSpy },
      ],
    });
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    mockApiService = TestBed.inject(ApiService) as jasmine.SpyObj<ApiService>;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch products from getCategoryProducts API on initialization', () => {
    mockApiService.getCategoryProducts.and.returnValue(of(mockProducts));
    mockApiService.getProducts.and.returnValue(of(mockProducts));

    component.ngOnInit();
    expect(mockApiService.getCategoryProducts).toHaveBeenCalledWith('jewelery');
    expect(component.products).toEqual(mockProducts);
    expect(mockApiService.getProducts);
    expect(component.products).toEqual(mockProducts);
  });

  
});
