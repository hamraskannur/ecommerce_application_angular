import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { of } from 'rxjs';

import { LoginComponent } from './login.component';
import { ApiService } from '../../services/api.service';
import { User } from 'src/app/core/model';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let mockApiService: jasmine.SpyObj<ApiService>;

  beforeEach(waitForAsync(() => {
    mockApiService = jasmine.createSpyObj('ApiService', ['userLogin']);
    mockApiService.userLogin.and.returnValue(
      of({
        token: 'sampleToken',
        user: {} as User,
        status: true,
        message: 'Registration successful',
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
       declarations: [LoginComponent],
      providers: [{ provide: ApiService, useValue: mockApiService }],
    });
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
  it('should be invalid when form fields are empty', () => {
    expect(component.loginForm.valid).toBeFalsy();
  });
  
  it('should submit registration form', () => {
    component.loginForm.setValue({
      email: 'test@example.com',
      password: 'Test@123',
    });

    component.onSubmit();

    expect(mockApiService.userLogin).toHaveBeenCalledWith({
      email: 'test@example.com',
      password: 'Test@123',
    });
    expect(component.ErrMessage).toBe(null);
  });
});
