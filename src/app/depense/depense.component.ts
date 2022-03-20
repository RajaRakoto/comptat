import { Component, OnInit } from '@angular/core';
import { DEPENSE_DATA } from './depense.service';

/*export interface Depense {
  type: string;
  heure: string;
  motif: string;
  montant: number;
}

const DEPENSE_DATA: Depense[] = [
  {
    heure: '09:47',
    type: 'Alimentaire',
    motif: 'Aliment',
    montant: 50000,
  },
  {
    heure: '13:09',
    type: 'Culte',
    motif: 'Pour le Pasteur',
    montant: 100000,
  },
  {
    heure: '15:31',
    type: 'Action social',
    motif: 'Reboisement',
    montant: 200000,
  },
  {
    heure: '17:11',
    type: 'Extrat',
    motif: 'Group électrogène',
    montant: 9000,
  },
];
*/
@Component({
  selector: 'app-depense',
  templateUrl: './depense.component.html',
  styleUrls: ['./depense.component.scss'],
})
export class DepenseComponent implements OnInit {
  headers = ['heure', 'type', 'motif', 'montant'];
  footers = ['24 h', 'Total', 4076000];
  depenses = DEPENSE_DATA;

  constructor() {}

  ngOnInit(): void {}
}
