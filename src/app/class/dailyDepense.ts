import { DepenseItem } from './depense';

export class DailyDepense {
  total = 0;
  constructor(public date: string, public depenses: DepenseItem[]) {
    this.updateTotal();
  }

  updateTotal() {
    let sum = 0;
    this.depenses.forEach((e) => (sum += e.montant));
    this.total = sum;
  }

  insertDepense(newDepense: DepenseItem[]) {
    this.depenses.push(...newDepense);
    this.updateTotal();
  }
}
