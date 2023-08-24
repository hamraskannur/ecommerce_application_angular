import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponent } from './card.component';
import { HttpClientModule } from '@angular/common/http';
import { ToastrServices } from 'src/app/features/services/toastr.service';
import { ToastrService } from 'ngx-toastr';
import { StoreModule } from '@ngrx/store';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;
  let toastrServiceMock: Partial<ToastrServices>; // Using a partial mock

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule,StoreModule.forRoot({})],
      declarations: [CardComponent],
      providers: [
        { provide: ToastrServices, useValue: toastrServiceMock }, // Provide the mock ToastrService
        ToastrService,
      ],
    });
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
