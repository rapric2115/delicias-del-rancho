import { PRODUCTOS } from './../shared/catalogo';
import { IProductsList } from './../shared/productos';
import { Component, OnInit} from '@angular/core';



@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

  // PList: any[];
  prod: IProductsList[];
  PList: any[];

  constructor() {}


  ngOnInit() {
    this.PList = PRODUCTOS;
  }

}
