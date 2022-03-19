import { Component, OnInit } from '@angular/core';

export interface Revenu {
  type: string;
  heure: string;
  source: string;
  montant: number;
}

const REVENU_DATA: Revenu[] = [
  {
    heure: '09:47',
    type: 'Massage',
    source: 'IIF3MG Analakely',
    montant: 30000,
  },
  { heure: '13:09', type: 'Formation', source: 'Formation', montant: 220000 },
  {
    heure: '15:31',
    type: 'Aide à domicile',
    source: 'M4C11 Anosy',
    montant: 50000,
  },
  { heure: '17:11', type: 'Garde malade', source: 'HJRA', montant: 9000 },
];

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

  ngOnInit(): void {}
}
