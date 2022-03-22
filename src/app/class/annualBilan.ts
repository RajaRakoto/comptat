import { MonthlyBilan } from './monthlyBilan';

export class AnnualBilan {
  revenu = 0;
  depense = 0;
  gain = 0;

  constructor(public monthlyBilans: MonthlyBilan[]) {
    this.getRevenu();
    this.getDepense();
    this.getGain();
  }

  getRevenu() {
    let sum = 0;
    this.monthlyBilans.forEach((x) => (sum += x.revenu));
    this.revenu = sum;
  }

  getDepense() {
    let sum = 0;
    this.monthlyBilans.forEach((x) => (sum += x.depense));
    this.depense = sum;
  }

  getGain() {
    let sum = 0;
    this.monthlyBilans.forEach((x) => (sum += x.gain));
    this.gain = sum;
  }
}
