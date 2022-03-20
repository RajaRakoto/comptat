import { Injectable } from '@angular/core';

export interface Depense {
  type: string;
  heure: string;
  motif: string;
  montant: number;
}

@Injectable({
  providedIn: 'root',
})
export class DepenseService {
  newDepense: Depense = {
    heure: '',
    montant: 0,
    motif: '',
    type: '',
  };

  constructor() {}

  dropNewDepense() {
    this.newDepense = {
      heure: '',
      montant: 0,
      motif: '',
      type: '',
    };
  }
}
