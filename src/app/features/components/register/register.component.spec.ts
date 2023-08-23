import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StoreModule } from '@ngrx/store';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

import { RegisterComponent } from './register.component';
import { ApiService } from '../../services/api.service';
import { User } from 'src/app/core/model';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let mockApiService: jasmine.SpyObj<ApiService>;

  beforeEach(waitForAsync(() => {
    mockApiService = jasmine.createSpyObj('ApiService', ['userRegistration']);
    mockApiService.userRegistration.and.returnValue(
      of({
        token: 'sampleToken',
        user: {} as User,
        status: true,
        msg: 'Registration successful',
      })
    );

    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        HttpClientTestingModule,
        ReactiveFormsModule,
        StoreModule.forRoot({}),
        RouterTestingModule,
      ],
      declarations: [RegisterComponent],
      providers: [{ provide: ApiService, useValue: mockApiService }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be invalid when form fields are empty', () => {
    expect(component.registrationForm.valid).toBeFalsy();
  });
  
  it('should submit registration form', () => {
    component.registrationForm.setValue({
      username: 'testuser',
      email: 'test@example.com',
      password: 'Test@123',
    });

    component.onSubmit();

    expect(mockApiService.userRegistration).toHaveBeenCalledWith({
      username: 'testuser',
      email: 'test@example.com',
      password: 'Test@123',
    });
    expect(component.ErrMessage).toBe(null);
  });

});
