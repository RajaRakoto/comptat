import { Component, OnInit } from '@angular/core';
import { REVENU_DATA } from './revenu.service';

@Component({
  selector: 'app-revenu',
  templateUrl: './revenu.component.html',
  styleUrls: ['./revenu.component.scss'],
})
export class RevenuComponent implements OnInit {
  headers = ['heure', 'type', 'source', 'montant'];
  footers = ['24 h', 'Total', 100];
  revenus = REVENU_DATA;

  constructor() {}

  ngOnInit(): void {
    this.totalRevenu();
  }
  totalRevenu(){
     for(let i=0; i<this.revenus.length; i++){
        this.footers[2] = +this.footers[2] + this.revenus[i].montant;
      }
    }
}
