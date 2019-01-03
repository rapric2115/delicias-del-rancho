import { Component, OnInit } from '@angular/core';
import { PRODUCTOS } from './../shared/catalogo';
import { IProductsList } from './../shared/productos';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-our-product',
  templateUrl: './our-product.component.html',
  styleUrls: ['./our-product.component.css']
})
export class OurProductComponent implements OnInit {

  prod: IProductsList[];
  ProdL = PRODUCTOS;

  constructor(private translate: TranslateService) {}

  ngOnInit() {
  }

}
