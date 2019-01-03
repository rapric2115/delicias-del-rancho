import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit, Input } from '@angular/core';

import { IProductsList } from '../../shared/productos';
import { SorterService } from '../../core/sorter.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  private _products: IProductsList[] = [];
  selectedProd: IProductsList;

  @Input() get products(): IProductsList[] {
    return this._products;
  }

  set products(value: IProductsList[]) {
    if (value) {
      this.filteredProducts = this._products = value;
    }
  }

  filteredProducts: any[] = [];

  constructor(private sorterService: SorterService, private translate: TranslateService) { }

  ngOnInit() {
  }

  filter(data: string) {
    if (data) {
      this.filteredProducts = this.products.filter((prod: IProductsList) => {
        return prod.name.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
        prod.description.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
        prod.category.toLowerCase().indexOf(data.toLowerCase()) > -1;
      });
    } else {
      this.filteredProducts = this.products;
    }
  }

  sort(prop: string) {
    this.sorterService.sort(this.filteredProducts, prop);
  }


 onSelect(prodL: IProductsList): void {
  this.selectedProd = prodL;
  console.log(this.selectedProd);
}
}
