import { DepenseItem } from './../class/depense';
import { RevenuItem } from './../class/revenu';
import { CAISS_DATA } from './../data/caisse.data';
import { Injectable } from '@angular/core';
import { Caisse } from '../class/caisse';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CaisseService {
  caisse: Caisse;
  caisseAssistSubject = new Subject<number>();

  constructor() {
    this.caisse = CAISS_DATA;
    this.emitCaisseAssist();
  }

  emitCaisseAssist() {
    this.caisseAssistSubject.next(this.caisse.assist);
  }

  newCredit(userType: 'assist' | 'admin', revenus: RevenuItem[]) {
    let sum = 0;
    revenus.forEach((r) => (sum += r.montant));

    if (userType === 'assist') {
      this.caisse.assist += sum;
    } else {
      this.caisse.admin += sum;
    }
    this.emitCaisseAssist();
  }

  newDepense(userType: 'assist' | 'admin', depenses: DepenseItem[]) {
    let valid = true;
    let sum = 0;
    depenses.forEach((d) => (sum += d.montant));

    if (userType === 'assist') {
      if (this.caisse.assist >= sum) {
        this.caisse.assist -= sum;
      } else {
        valid = false;
      }
    } else {
      if (this.caisse.admin >= sum) {
        this.caisse.admin -= sum;
      } else {
        valid = false;
      }
    }
    if (valid) {
      this.emitCaisseAssist();
    }
    return valid;
  }
}
