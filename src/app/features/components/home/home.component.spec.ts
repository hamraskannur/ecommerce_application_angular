import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { HomeComponent } from './home.component';
import { HeaderComponent } from 'src/app/core/components/header/header.component';
import { BannerComponent } from './banner/banner.component';
import { ApiService } from '../../services/api.service';
import { provideMockStore } from '@ngrx/store/testing';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { ToastrServices } from '../../services/toastr.service';
import { CardComponent } from './card/card.component';
import { FooterComponent } from './footer/footer.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let toastrServiceMock: Partial<ToastrServices>; // Using a partial mock

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, ToastrModule.forRoot()], // Add HttpClientModule here
      declarations: [
        HomeComponent,
        HeaderComponent,
        BannerComponent,
        CardComponent,
        FooterComponent
      ],
      providers: [
        ApiService,
        provideMockStore({}),
        { provide: ToastrServices, useValue: toastrServiceMock }, // Provide the mock ToastrService
        ToastrService,
      ],
    });
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
