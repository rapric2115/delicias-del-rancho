import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  configUrl = '../assets/productos.json';

  constructor(private http: HttpClient) { }


  getProd() {
    // return this.http.get(this.configUrl);
    this.http.get(this.configUrl).subscribe(data => {
      console.log(data);
  });
  }

}

