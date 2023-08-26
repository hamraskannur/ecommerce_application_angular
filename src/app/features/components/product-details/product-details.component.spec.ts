import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailsComponent } from './product-details.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { ToastrServices } from '../../services/toastr.service';
import { HeaderComponent } from 'src/app/core/components/header/header.component';
import { StoreModule } from '@ngrx/store';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from 'src/app/core/components/footer/footer.component';

describe('ProductDetailsComponent', () => {
  let component: ProductDetailsComponent;
  let fixture: ComponentFixture<ProductDetailsComponent>;
  let toastrServiceMock: Partial<ToastrServices>; // Using a partial mock

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductDetailsComponent,HeaderComponent,FooterComponent],
      imports: [StoreModule.forRoot({}),HttpClientModule,FormsModule], // Include HttpClientModule here
      providers: [
        { provide: ToastrServices, useValue: toastrServiceMock }, ToastrService,
        {
          provide: ActivatedRoute,
          useValue: {params: of({ id: '123' })},
        },
      ],
    });
    fixture = TestBed.createComponent(ProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
