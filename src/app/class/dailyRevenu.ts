import { RevenuItem } from './revenu';

export class DailyRevenu {
  total: number = 0;
  constructor(public date: string, public revenus: RevenuItem[]) {}

  updateTotal() {
    let sum = 0;
    this.revenus.forEach((i) => (sum += i.montant));
    this.total = sum;
  }

  insertRevenu(newRevenu: RevenuItem) {
    this.revenus.push(newRevenu);
    this.updateTotal();
  }
}
