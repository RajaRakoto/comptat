import { Component, OnInit } from '@angular/core';

export interface Depense {
  type: string;
  heure: string;
  motif: string;
  montant: number;
}

export interface DailyDepense {
  date: string;
  depenses: Depense[];
  total: number;
}

const REVENU_DATA_1: Depense[] = [
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

const REVENU_DATA_2: Depense[] = [
  {
    heure: '07:02',
    type: 'Alimentaire',
    motif: 'Aliment',
    montant: 30000,
  },
  {
    heure: '10:19',
    type: 'Culte',
    motif: 'Pour le Pasteur',
    montant: 140000,
  },
  {
    heure: '12:22',
    type: 'Action social',
    motif: 'Reboisement',
    montant: 150000,
  },
];

const DAILY_REVENU_DATA_1: DailyDepense = {
  date: 'Dimanche 15 Mars 2022',
  depenses: REVENU_DATA_1,
  total: totalDailyDepense(REVENU_DATA_1),
};

const DAILY_REVENU_DATA_2: DailyDepense = {
  date: 'Lundi 16 Mars 2022',
  depenses: REVENU_DATA_2,
  total: totalDailyDepense(REVENU_DATA_2),
};

function totalDailyDepense(depenses: Depense[]) {
  let total = 0;
  depenses.forEach((r) => (total += r.montant));
  return total;
}

@Component({
  selector: 'app-depense-archive',
  templateUrl: './depense-archive.component.html',
  styleUrls: ['./depense-archive.component.scss'],
})
export class DepenseArchiveComponent implements OnInit {
  headers = ['heure', 'type', 'motif', 'montant'];
  depenseArchive = [DAILY_REVENU_DATA_1, DAILY_REVENU_DATA_2];

  constructor() {}

  ngOnInit(): void {}
}
