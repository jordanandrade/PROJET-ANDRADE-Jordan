import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FormulaireService {

  constructor(private httpClient : HttpClient ) { }

  public login(login : string, password : string) :   Observable<any> {
    let httpOptions = {
      headers :  new HttpHeaders ({'Content-Type':'application/json'})};

    return this.httpClient.post<any> ("/api/login",{"login":login,"password":password},httpOptions);
  }
}
