import { RevenuItem } from './../class/revenu';
import { REVENUS_DATA, NEW_CREDITS_DATA } from './../data/revenu.data';
import { Injectable } from '@angular/core';
import { DailyRevenu } from '../class/dailyRevenu';

@Injectable({
  providedIn: 'root',
})
export class RevenuService {
  revenuToday: DailyRevenu;
  newRevenu?: RevenuItem;
  newCredits: RevenuItem[] = [];

  constructor() {
    this.revenuToday = new DailyRevenu(`${new Date()}`, REVENUS_DATA);
    this.newCredits = NEW_CREDITS_DATA;
  }

  dropNewRevenu() {
    this.newRevenu = undefined;
  }

  confirmRevenu(revenus: RevenuItem[]) {
    this.revenuToday.insertRevenu(revenus);
  }
}
