export class RevenuItem {
  constructor(
    public date: string,
    public type:
      | 'pension'
      | 'aide à domicile'
      | 'formation'
      | 'droit de stage'
      | 'massage'
      | 'garde malade'
      | 'opération'
      | 'consultation'
      | 'extrat',
    public source: string,
    public montant: number
  ) {}
}
