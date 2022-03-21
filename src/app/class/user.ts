export class User {
  constructor(
    public ID: string,
    public pass: string,
    public type: 'assist' | 'admin',
    public cash: number
  ) {}
}
