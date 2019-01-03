import { Component, OnInit, Input } from '@angular/core';
import { PRODUCTOS } from './../shared/catalogo';
import { IProductsList } from './../shared/productos';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  prod: IProductsList[];
  ProdL = PRODUCTOS;

  constructor() {
    console.log(this.ProdL);
  }

  ngOnInit() {
  }

}
