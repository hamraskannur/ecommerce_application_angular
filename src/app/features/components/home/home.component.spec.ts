import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { HomeComponent } from './home.component';
import { HeaderComponent } from 'src/app/core/components/header/header.component';
import { BannerComponent } from './banner/banner.component';
import { ApiService } from '../../services/api.service';
import { provideMockStore } from '@ngrx/store/testing';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule], // Add HttpClientModule here
      declarations: [HomeComponent,HeaderComponent,BannerComponent],
      providers: [ApiService,provideMockStore({})], 
          });
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
