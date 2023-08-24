import { Pipe, PipeTransform } from '@angular/core';
import { Product } from 'src/app/core/model';

@Pipe({
  name: 'customFilter',
})
export class CustomFilterPipe implements PipeTransform {
  transform(data: Product[], search: string): Product[] | null {
    let initial = false;
    let products!: Product[];
    if (!initial) {
      products = [...data];
    }
    if (!search) {
      return products;
    }
    if (!data) {
      return data;
    }

    search = search.toLowerCase();

    return data.filter((item) => {
      return (
        item.title.toLowerCase().includes(search) ||
        item.category.toLowerCase().includes(search)
      );
    });
  }
}
