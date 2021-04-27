import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { FormulaireComponent } from './formulaire/formulaire.component';
import { HeaderComponent } from './header/header.component';
import { IdentificationGuardGuard } from './identification-guard.guard';
import { NgxsModule } from '@ngxs/store';
import { HomeComponent } from './home/home.component';
import {PanierState} from './shared/states/panier-state';
import { LoginComponent } from './login/login.component';
import { RecapComponent } from './recap/recap.component';


const appLiens : Routes = [
  {path:'login',component:LoginComponent},
  {path:'formulaire',component:FormulaireComponent},
  {path:'home',component:HomeComponent},
  {path:'produit', canActivate: [IdentificationGuardGuard], loadChildren:() => import('./produit/produit.module').then(m => m.ProduitModule)}
]


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    FormulaireComponent,
    RecapComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpClientModule,RouterModule.forRoot (appLiens), 
    NgxsModule.forRoot([PanierState])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
