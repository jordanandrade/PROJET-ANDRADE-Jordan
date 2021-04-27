import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recap',
  templateUrl: './recap.component.html',
  styleUrls: ['./recap.component.css']
})
export class RecapComponent implements OnInit {
  @Input() nom : string = "";
  @Input() prenom : string = "";
  @Input() email : string = "";
  @Input() password : string = "";
  @Input() adresse : string = "";
  @Input() ville : string = "";
  @Input() tel : string = "";
  @Input() civilite : string = "";
  @Input() login : string = "";
  @Input() pays : string = "";
  @Input() cp : string = "";
  constructor() { }

  ngOnInit(): void {
  }

}
