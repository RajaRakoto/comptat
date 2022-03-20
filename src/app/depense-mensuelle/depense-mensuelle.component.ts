import { Component, OnInit } from '@angular/core';

export interface MonthlyBilan {
  mois: string;
  revenu: number;
  depense: number;
  gain: number;
}

export interface MonthlyDepenseItem {
  libelle: string;
  montant: number;
  editable?: boolean;
}

export interface MonthlyDepense {
  date: string;
  depenses: MonthlyDepenseItem[];
  bilan: MonthlyBilan;
}

const MONTHLY_BILAN: MonthlyBilan = {
  mois: 'mars',
  revenu: 21000000,
  depense: 17100000,
  gain: 2900000,
};

const MONTHLY_DEPENSE: MonthlyDepense = {
  date: 'Mars 2022',
  bilan: MONTHLY_BILAN,
  depenses: [
    {
      libelle: 'alimentaire',
      montant: 0,
    },
    {
      libelle: 'Provision',
      montant: 0,
    },
    {
      libelle: 'Culte',
      montant: 0,
    },
    {
      libelle: 'Action',
      montant: 0,
    },
    {
      libelle: 'Consultation',
      montant: 0,
    },
    {
      libelle: 'Déplacement',
      montant: 0,
    },
    {
      libelle: 'Extrat',
      montant: 0,
    },
    {
      libelle: 'Loyer',
      montant: 0,
      editable: true,
    },
    {
      libelle: 'Salaire',
      montant: 0,
      editable: true,
    },
    {
      libelle: 'JIRAMA',
      montant: 0,
      editable: true,
    },
  ],
};

@Component({
  selector: 'app-depense-mensuelle',
  templateUrl: './depense-mensuelle.component.html',
  styleUrls: ['./depense-mensuelle.component.scss'],
})
export class DepenseMensuelleComponent implements OnInit {
  monthlyDepense = MONTHLY_DEPENSE;

  constructor() {}

  ngOnInit(): void {}
}
