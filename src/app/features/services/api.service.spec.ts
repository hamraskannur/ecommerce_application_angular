import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ApiService } from './api.service';
import { User, Product } from 'src/app/core/model';

describe('ApiService', () => {
  let apiService: ApiService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService]
    });

    apiService = TestBed.inject(ApiService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should retrieve products', () => {
    const mockProducts: Product[] = [
      // Provide mock product data
    ];

    apiService.getProducts().subscribe((products: Product[]) => {
      expect(products).toEqual(mockProducts);
    });

    const req = httpTestingController.expectOne(apiService.Api);
    expect(req.request.method).toEqual('GET');
    req.flush(mockProducts);
  });

  it('should register a user', () => {
    const mockUserData = {
      // Provide mock user data
    };

    apiService.userRegistration(mockUserData).subscribe((response) => {
      expect(response.status).toBe(true);
      // Add more assertions based on your response structure
    });

    const req = httpTestingController.expectOne(`${apiService.serverApi}signup`);
    expect(req.request.method).toEqual('POST');
    req.flush({ status: true }); // Mock the response
  });

  it('should log in a user', () => {
    const mockUserData = {
      // Provide mock user data
    };

    apiService.userLogin(mockUserData).subscribe((response) => {
      expect(response.status).toBe(true);
      // Add more assertions based on your response structure
    });

    const req = httpTestingController.expectOne(`${apiService.serverApi}login`);
    expect(req.request.method).toEqual('POST');
    req.flush({ status: true }); // Mock the response
  });

  it('should retrieve user details', () => {
    const mockUser: User = {
      _id: '123',
      createdAt: '2023-08-01T12:34:56Z',
      email: 'user@example.com',
      password: 'hashedpassword',
      username: 'testuser'
    };

    apiService.getUser().subscribe((user: User) => {
      expect(user).toEqual(mockUser);
    });

    const req = httpTestingController.expectOne(`${apiService.serverApi}me`);
    expect(req.request.method).toEqual('GET');
    req.flush(mockUser);
  });
});
