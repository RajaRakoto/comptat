import { Component, OnInit } from '@angular/core';
import { REVENU_DATA } from './revenu.service';

@Component({
  selector: 'app-revenu',
  templateUrl: './revenu.component.html',
  styleUrls: ['./revenu.component.scss'],
})
export class RevenuComponent implements OnInit {
  headers = ['heure', 'type', 'source', 'montant'];
  footers = ['24 h', 'Total', 4076000];
  revenus = REVENU_DATA;

  constructor() {}

  ngOnInit(): void {
    console.log(this.revenus);
  }
}
