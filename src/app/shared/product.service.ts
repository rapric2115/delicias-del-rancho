import { PRODUCTOS } from './catalogo';
import { IProductsList } from './productos';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  getProducts(): IProductsList[] {
    return PRODUCTOS;
  }

  constructor() {

  }

}
