import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmptyCartComponent } from './empty-cart.component';
import { ActivatedRoute, convertToParamMap, RouterModule } from '@angular/router';
import { of } from 'rxjs';
import { StoreModule } from '@ngrx/store';

class ActivatedRouteStub {
  // Use BehaviorSubject or of() to provide observables
  paramMap = of(convertToParamMap({}));
  // Add other properties and methods as needed
}

describe('EmptyCartComponent', () => {
  let component: EmptyCartComponent;
  let fixture: ComponentFixture<EmptyCartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmptyCartComponent],
      imports: [RouterModule],
      providers: [
        { provide: ActivatedRoute, useClass: ActivatedRouteStub } // Provide the stub
      ],
    });
    fixture = TestBed.createComponent(EmptyCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
