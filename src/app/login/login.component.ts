import { Component, OnInit } from '@angular/core';
import {FormulaireService} from '../service/formulaire.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  login : string = "";
  password : string = "";

  constructor(private formulaireService : FormulaireService) { }

  ngOnInit(): void {
  }


  connexion () {
    console.log (this.login + " " + this.password);
    this.formulaireService.login (this.login,this.password).subscribe (flux => console.log (flux));

  }

}
