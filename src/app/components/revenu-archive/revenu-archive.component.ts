import { Component, OnInit } from '@angular/core';

export interface Revenu {
  type: string;
  heure: string;
  source: string;
  montant: number;
}

export interface DailyRevenu {
  date: string;
  revenus: Revenu[];
  total: number;
}

const REVENU_DATA_1: Revenu[] = [
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

const REVENU_DATA_2: Revenu[] = [
  {
    heure: '08:41',
    type: 'Massage',
    source: 'IIF3MG Analakely',
    montant: 40000,
  },
  { heure: '10:09', type: 'Formation', source: 'Formation', montant: 220000 },
  {
    heure: '12:31',
    type: 'Aide à domicile',
    source: 'M4C11 Anosy',
    montant: 52000,
  },
  { heure: '13:11', type: 'Garde malade', source: 'HJRA', montant: 9000 },
];

const DAILY_REVENU_DATA_1: DailyRevenu = {
  date: 'Dimanche 15 Mars 2022',
  revenus: REVENU_DATA_1,
  total: totalDailyRevenu(REVENU_DATA_1),
};

const DAILY_REVENU_DATA_2: DailyRevenu = {
  date: 'Lundi 16 Mars 2022',
  revenus: REVENU_DATA_2,
  total: totalDailyRevenu(REVENU_DATA_2),
};

function totalDailyRevenu(revenus: Revenu[]) {
  let total = 0;
  revenus.forEach((r) => (total += r.montant));
  return total;
}

@Component({
  selector: 'app-revenu-archive',
  templateUrl: './revenu-archive.component.html',
  styleUrls: ['./revenu-archive.component.scss'],
})
export class RevenuArchiveComponent implements OnInit {
  headers = ['heure', 'type', 'source', 'montant'];
  revenuArchive = [DAILY_REVENU_DATA_1, DAILY_REVENU_DATA_2];

  constructor() {}

  ngOnInit(): void {}
}
