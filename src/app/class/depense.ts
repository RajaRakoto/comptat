export class DepenseItem {
  constructor(
    public date: string,
    public type:
      | 'alimentaire'
      | 'provision'
      | 'culte'
      | 'action'
      | 'consultation'
      | 'déplacement'
      | 'extrat',
    public motif: string,
    public montant: number
  ) {}
}
