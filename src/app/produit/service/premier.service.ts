import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PremierServiceService {

  constructor(private httpClient : HttpClient) { 
    this.datas = new Array<string> ();
  }

  datas : string [];

  //recup les voitures
  public getVoitures () : Observable<any> {
    return this.httpClient.get<any> (environment.baseUrl);
  }

}