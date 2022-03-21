import { DepenseItem } from './depense';

export class DailyDepense {
  total = 0;
  constructor(public expenses: DepenseItem[]) {}

  updateTotal() {
    let sum = 0;
    this.expenses.forEach((e) => (sum += e.montant));
    this.total = sum;
  }

  insertSpent(newDepense: DepenseItem) {
    this.expenses.push(newDepense);
    this.updateTotal();
  }
}
