import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { ToastrServices } from 'src/app/features/services/toastr.service';
import { CardComponent } from './card.component';
import { CustomFilterPipe } from '../../../../shared/pipe/custom-filter.pipe';
import { SharedModule } from 'src/app/shared/shared.module';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;
  let toastrServiceMock: Partial<ToastrServices>; // Using a partial mock
  let mockActivatedRoute: any;

  beforeEach(() => {
    mockActivatedRoute = {
      paramMap: of({ get: (param: string) => 'some_category' }) // Mock the paramMap observable
    };
    TestBed.configureTestingModule({
      imports:[HttpClientModule,SharedModule,StoreModule.forRoot({})],
      declarations: [ CardComponent,CustomFilterPipe], // Include CustomFilterPipe
      providers: [
        { provide: ToastrServices, useValue: toastrServiceMock }, 
        { provide: ActivatedRoute, useValue: mockActivatedRoute },

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
