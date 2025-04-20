import { Injectable } from '@angular/core';
import { PRODUCTS, Product } from '../data/products';

@Injectable({
  providedIn: 'root'
})
export class ProductFormService {

  constructor() { }

    create(User:Product){
      PRODUCTS.push()
    }
    read():Product[]{
      return PRODUCTS
    }
    readSingle(id:number): Product | boolean{
      let singleProduct: Product | undefined  = PRODUCTS.find(user => user.id === id )
      if(singleProduct) return singleProduct
      else return false
    }
    update(user: Product){
      let productIndex: number  = PRODUCTS.findIndex(u => u.id === user.id )
      PRODUCTS[productIndex] = user
    }
    delete(id:number){
      let productIndex: number  = PRODUCTS.findIndex(u => u.id === id )
      if(productIndex !== -1) PRODUCTS.splice(productIndex, 0)
    }
}
