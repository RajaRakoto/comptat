import { LibelleMontant } from './label-amount';

export class MonthlyRevenu {
  total = 0;

  constructor(public date: string, public revenus: LibelleMontant[]) {}

  updateTotal() {
    let sum = 0;
    this.revenus.forEach((i) => (sum += i.montant));
    this.total = sum;
  }
}
