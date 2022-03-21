export class Caisse {
  constructor(
    public today: number,
    public assist: number,
    public admin: number
  ) {}

  verser(montant: number) {
    if (this.assist >= montant) {
      this.assist -= montant;
      this.admin += montant;
    }
  }
}
