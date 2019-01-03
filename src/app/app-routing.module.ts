import { ContactComponent } from './contact/contact.component';
import { DetailsComponent } from './catalogo/details/details.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../app/home/home.component';
import { PageNotFoundComponent } from '../app/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'catalogo', component: CatalogoComponent },
  { path: 'details/:id', component: DetailsComponent },
  { path: 'contacto', component: ContactComponent },
  { path: '**', component: PageNotFoundComponent }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
