import { Component, OnInit } from '@angular/core';

export interface MonthlyBilan {
  mois: string;
  revenu: number;
  depense: number;
  gain: number;
}

export interface AnualBilan {
  date: string;
  bilans: MonthlyBilan[];
  total: MonthlyBilan;
}

const MONTHLY_DATA_1: MonthlyBilan[] = [
  {
    mois: 'janvier',
    revenu: 18000000,
    depense: 16100000,
    gain: 1720000,
  },
  {
    mois: 'février',
    revenu: 19000000,
    depense: 16000000,
    gain: 3900000,
  },
  {
    mois: 'mars',
    revenu: 21000000,
    depense: 17100000,
    gain: 2900000,
  },
];

const ANUAL_BILAN_DATA_1: AnualBilan = {
  date: '2022',
  bilans: MONTHLY_DATA_1,
  total: totalAnualBilan(MONTHLY_DATA_1),
};

function totalAnualBilan(monthlyBilan: MonthlyBilan[]) {
  let total = {
    depense: 0,
    gain: 0,
    mois: 'Total',
    revenu: 0,
  };
  monthlyBilan.forEach((m) => {
    total.depense += m.depense;
    total.revenu += m.revenu;
    total.gain += m.gain;
  });
  return total;
}

@Component({
  selector: 'app-analyse',
  templateUrl: './analyse.component.html',
  styleUrls: ['./analyse.component.scss'],
})
export class AnalyseComponent implements OnInit {
  headers = ['mois', 'revenu', 'depense', 'gain'];
  anualBilans = [ANUAL_BILAN_DATA_1];

  constructor() {}

  ngOnInit(): void {}
}
