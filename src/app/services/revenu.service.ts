import { Injectable } from '@angular/core';

export interface Revenu {
  type: string;
  heure: string;
  source: string;
  montant: number;
}

@Injectable({
  providedIn: 'root',
})
export class RevenuService {
  newRevenu: Revenu = {
    heure: '',
    montant: 0,
    source: '',
    type: '',
  };

  constructor() {}

  dropNewRevenu() {
    this.newRevenu = {
      heure: '',
      montant: 0,
      source: '',
      type: '',
    };
  }
}
