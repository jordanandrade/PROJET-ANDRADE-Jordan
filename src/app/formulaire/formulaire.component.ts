import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {

  valid : boolean = true;
  prenom : string;
  nom : string;
  adresse : string;
  cp : string;
  ville : string;
  tel : string;
  email : string;
  civilite : string;
  password : string;
  confirmPassword : string;
  login : string;
  pays : string;
  recapitulatif : string="";
  infos : string="";
  infoPassword : string="";
  validForm : boolean = false;
  boolAfficheRecap : boolean = false;
  click : string ="";

  constructor() { }

  valider(){
    if((this.nom != "") && (this.prenom != "") && (this.adresse != "") && (this.ville != "") && (this.tel != "") && (this.cp != "") && (this.civilite != "") && (this.login != ""))
    {
      if (this.password != this.confirmPassword){
        alert("Le mots de passe n'est pas le même")
    }}
    else{alert("Il manque quelque chose!")}
  }
  
  ngOnInit(): void {
  }

}
