import { TestBed } from '@angular/core/testing';
import { CustomFilterPipe } from './custom-filter.pipe';
import { Product } from 'src/app/core/model';

describe('CustomFilterPipe', () => {
  let pipe: CustomFilterPipe;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomFilterPipe], // Provide the pipe
    });

    pipe = TestBed.inject(CustomFilterPipe); // Inject the pipe instance
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should filter products based on search', () => {
    const products: Product[] = [
      {
        id: 1,
        title: 'Product A',
        category: 'Category X',
        description: 'ikokikoko',
        image: 'miikkiki',
        price: 5678,
        rating: { rate: 1, count: 1 },
        quantity: 1,
        addedToCart: false,
      },
      {
        id: 2,
        title: 'Product b',
        category: 'Category X',
        description: 'ikokikoko',
        image: 'miikkiki',
        price: 5678,
        rating: { rate: 1, count: 1 },
        quantity: 1,
        addedToCart: false,
      },
    ];

    const searchKeyword = 'Product A';

    const filteredProducts = pipe.transform(products, searchKeyword);

    if (filteredProducts) {
      expect(filteredProducts.length).toBe(1);
      expect(filteredProducts[0].title).toContain(searchKeyword);
    }
  });

  it('should return all products if search is empty', () => {
    const products: Product[] = [
      {
        id: 1,
        title: 'Product A',
        category: 'Category X',
        description: 'ikokikoko',
        image: 'miikkiki',
        price: 5678,
        rating: { rate: 1, count: 1 },
        quantity: 1,
        addedToCart: false,
      },
      {
        id: 2,
        title: 'Product b',
        category: 'Category X',
        description: 'ikokikoko',
        image: 'miikkiki',
        price: 5678,
        rating: { rate: 1, count: 1 },
        quantity: 1,
        addedToCart: false,
      },
    ];
    const filteredProducts = pipe.transform(products, '');
    if (filteredProducts) {
      expect(filteredProducts.length).toBe(2);
    }
  });

});
