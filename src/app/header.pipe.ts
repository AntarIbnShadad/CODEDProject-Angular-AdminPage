import { Pipe, PipeTransform } from '@angular/core';
import { productSchema } from './data/generics';

@Pipe({
  name: 'header',
  standalone: true
})
export class HeaderPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): string {
    switch (value) {
      case 'ID': return 'id';
      case 'name': return 'name';
      case 'description': return 'description';
      case 'price': return 'price';
      case 'category': return 'category';
      case 'stock': return 'stock';
      case 'status': return 'status';
      case 'rating': return 'rating';
      case 'image': return 'imageUrl';
      case 'Added': return 'createdAt';
      case 'Updated': return 'updatedAt';
      default: return '';
    }
  }

}
