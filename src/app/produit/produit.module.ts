import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { DetailComponent } from './detail/detail.component';
import { RouterModule, Routes } from '@angular/router';
import { PanierComponent } from './panier/panier.component';
import { Store } from '@ngxs/store';

const appLiens : Routes = [
  {path:'catalogue',component:CatalogueComponent},
  {path:'panier',component:PanierComponent},
  {path:'detail/:id',component:DetailComponent}
]


@NgModule({
  declarations: [CatalogueComponent, DetailComponent, PanierComponent],
  imports: [
    CommonModule,
    RouterModule.forChild (appLiens)
  ]
})
export class ProduitModule { }
