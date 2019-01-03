import { PRODUCTOS } from './../shared/catalogo';
import { IProductsList } from './../shared/productos';
import { Component, OnInit, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  prod: IProductsList[];
  ProdL = PRODUCTOS;

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('es');
   }

  switchLanguage(language: string) {
    this.translate.use(language);
  }


  ngOnInit() {
  }

}

