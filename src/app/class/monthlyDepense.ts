import { LibelleMontant } from "./label-amount";

export class MonthlyDepense {
  total = 0;

  constructor(public date: string, public depenses: LibelleMontant[]) {}

  updateTotal() {
    let sum = 0;
    this.depenses.forEach((i) => (sum += i.montant));
    this.total = sum;
  }
}
