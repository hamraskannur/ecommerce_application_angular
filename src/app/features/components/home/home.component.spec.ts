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
import { ActivatedRoute } from '@angular/router';
import { CustomFilterPipe } from 'src/app/shared/pipe/custom-filter.pipe';
import { SharedModule } from 'src/app/shared/shared.module';
import { of } from 'rxjs';
import { FormsModule } from '@angular/forms';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let activatedRouteMock: any; // Declare ActivatedRoute mock

  beforeEach(() => {
    activatedRouteMock = {
      paramMap: of({ get: (param: string) => 'some_category' }) // Mock the paramMap observable
    };

    TestBed.configureTestingModule({
      imports: [HttpClientModule,SharedModule,FormsModule, ToastrModule.forRoot()], // Add HttpClientModule here
      declarations: [
        HomeComponent,
        CustomFilterPipe,
        HeaderComponent,
        BannerComponent,
        CardComponent,
        FooterComponent,
      ],
      providers: [
        ApiService,
        ToastrServices,
        provideMockStore({}),
        { provide: ActivatedRoute, useValue: activatedRouteMock }, // Provide the ActivatedRoute mock
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
