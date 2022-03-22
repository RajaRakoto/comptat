import { DepenseItem } from './../class/depense';
import { Injectable } from '@angular/core';
import { DailyDepense } from '../class/dailyDepense';
import { DEPENSE_DATA, NEW_DEPENSES_DATA } from '../data/depense.data';

@Injectable({
  providedIn: 'root',
})
export class DepenseService {
  depenseToday: DailyDepense;
  newDepense?: DepenseItem;
  newDepenses: DepenseItem[] = [];

  constructor() {
    this.depenseToday = new DailyDepense(`${new Date()}`, DEPENSE_DATA);
    this.newDepenses = NEW_DEPENSES_DATA;
  }

  dropNewDepense() {
    this.newDepense = undefined;
  }

  confirmDepense(depenses: DepenseItem[]) {
    this.depenseToday.insertDepense(depenses);
  }
}
