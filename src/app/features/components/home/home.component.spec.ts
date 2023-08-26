import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { HomeComponent } from './home.component';
import { HeaderComponent } from 'src/app/core/components/header/header.component';
import { BannerComponent } from './banner/banner.component';
import { provideMockStore } from '@ngrx/store/testing';
import { ToastrModule } from 'ngx-toastr';
import { CardComponent } from './card/card.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from 'src/app/core/components/footer/footer.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let activatedRouteMock: any; // Declare ActivatedRoute mock

  beforeEach(() => {
    activatedRouteMock = {
      paramMap: of({ get: (param: string) => 'some_category' }) // Mock the paramMap observable
    };

    TestBed.configureTestingModule({
      imports: [HttpClientModule,FormsModule, ToastrModule.forRoot()], // Add HttpClientModule here
      declarations: [
        HomeComponent,
        HeaderComponent,
        FooterComponent,
        BannerComponent,
        CardComponent,
      ],
      providers: [
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

  it("should set searchData when searchDataFromChild is called",()=>{
    const search="test search"
    component.searchDataFromChild(search)
    expect(component.searchData).toEqual(search)
  })
});
