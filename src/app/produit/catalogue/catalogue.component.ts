import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Observable } from "rxjs";
import { environment } from '../../../environments/environment';
import { Store } from '@ngxs/store';
import {AddReference} from '../../shared/actions/panier.action';
import {Router} from '@angular/router';
import { PremierServiceService } from '../service/premier.service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {

  constructor(private premier : PremierServiceService, private store : Store, private router : Router, private http : HttpClient)  { }
  observableBouchon$ : Observable<any> = null;
  observableDepuisDb$ : Observable<any> =null;
 
  ngOnInit(): void {
    console.log ("Liste toute les voitures ...")
    //this.observableBouchon$ = this.premier.getVoitures();
    this.observableDepuisDb$ = this.http.get<any>(environment.baseUrl);
  }
  
    addPanier (ref : string) {
      this.store.dispatch (new AddReference ({"reference":ref}));
      console.log (ref);
    }

    viewDetail (voiture : string) {
      this.router.navigate(["/produit/detail", voiture]);
    }
}
