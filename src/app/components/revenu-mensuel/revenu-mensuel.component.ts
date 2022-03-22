import { Component, OnInit } from '@angular/core';

export interface MonthlyBilan {
  mois: string;
  revenu: number;
  depense: number;
  gain: number;
}

export interface MonthlyRevenuItem {
  libelle: string;
  montant: number;
  editable?: boolean;
}

export interface MonthlyRevenu {
  date: string;
  revenus: MonthlyRevenuItem[];
  bilan: MonthlyBilan;
}

const MONTHLY_BILAN: MonthlyBilan = {
  mois: 'mars',
  revenu: 21000000,
  depense: 17100000,
  gain: 2900000,
};

const MONTHLY_REVENU: MonthlyRevenu = {
  date: 'Mars 2022',
  bilan: MONTHLY_BILAN,
  revenus: [
    {
      libelle: 'pension',
      montant: 0,
    },
    {
      libelle: 'aide à domicile',
      montant: 0,
    },
    {
      libelle: 'formation',
      montant: 0,
    },
    {
      libelle: 'droit de stage',
      montant: 0,
    },
    {
      libelle: 'massage',
      montant: 0,
    },
    {
      libelle: 'garde malade',
      montant: 0,
    },
    {
      libelle: 'opération',
      montant: 0,
    },
    {
      libelle: 'consultation',
      montant: 0,
    },
    {
      libelle: 'extrat',
      montant: 0,
    },
  ],
};

@Component({
  selector: 'app-revenu-mensuel',
  templateUrl: './revenu-mensuel.component.html',
  styleUrls: ['./revenu-mensuel.component.scss'],
})
export class RevenuMensuelComponent implements OnInit {
  monthlyRevenu = MONTHLY_REVENU;

  constructor() {}

  ngOnInit(): void {}
}
