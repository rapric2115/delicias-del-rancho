import { NgtUniversalModule } from '@ng-toolkit/universal';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './catalogo/details/details.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { FilterPipe } from './filter.pipe';
import { ProductListComponent } from './catalogo/product-list/product-list.component';
import { FilterTextBoxComponent } from './catalogo/product-list/filter-textbox.component';

import { SorterService } from '../app/core/sorter.service';
import { ContactComponent } from './contact/contact.component';
import { CalltoActionComponent } from './callto-action/callto-action.component';
import { OurProductComponent } from './our-product/our-product.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    CatalogoComponent,
    FilterPipe,
    ProductListComponent,
    FilterTextBoxComponent,
    DetailsComponent,
    ContactComponent,
    CalltoActionComponent,
    OurProductComponent,
    PageNotFoundComponent,

  ],
  imports: [
    CommonModule,
    NgtUniversalModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    BrowserModule.withServerTransition({appId: 'delicias-del-rancho'}),
  ],
  providers: [SorterService],
})
export class AppModule { }
