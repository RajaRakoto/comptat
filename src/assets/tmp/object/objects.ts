export class User {
  constructor(
    public ID: string,
    public pass: string,
    public type: 'assist' | 'admin',
    public cash: number
  ) {}
}

export class Checkout {
  constructor(
    public today: number,
    public assist: number,
    public admin: number
  ) {}
}

export class IncomeItem {
  constructor(
    public date: string,
    public type:
      | 'Pension'
      | 'Aide à domicile'
      | 'Formation'
      | 'Droit de stage'
      | 'Massage'
      | 'Garde malade'
      | 'Opération'
      | 'Consultation'
      | 'Extrat',
    public source: string,
    public amount: number
  ) {}
}

export class DailyIncome {
  total: number = 0;
  constructor(public date: string, public incomes: IncomeItem[]) {}

  setTotal() {
    let sum = 0;
    this.incomes.forEach((i) => (sum += i.amount));
    this.total = sum;
  }

  insertIncome(newIncome: IncomeItem) {
    this.incomes.push(newIncome);
  }
}

export class ExpenseItem {
  constructor(
    public date: string,
    public type:
      | 'Alimentaire'
      | 'Provision'
      | 'Culte'
      | 'Action'
      | 'Consultation'
      | 'Déplacement'
      | 'Extrat',
    public motif: string,
    public amount: number
  ) {}
}

export class DailyExpense {
  total = 0;
  constructor(public expenses: ExpenseItem[]) {}

  setTotal() {
    let sum = 0;
    this.expenses.forEach((e) => (sum += e.amount));
    this.total = sum;
  }

  insertSpent(newExpense: ExpenseItem) {
    this.expenses.push(newExpense);
  }
}

export class MonthlyIncomes {
  constructor(
    public date: string,
    public pension: number,
    public aide_a_domicile: number,
    public formation: number,
    public droit_de_stage: number,
    public massage: number,
    public garde_malade: number,
    public operation: number,
    public consultation: number,
    public extrat: number
  ) {}
}

export class MonthlyExpenses {
  constructor(
    public date: string,
    public aliment: number,
    public provision: number,
    public culte: number,
    public action: number,
    public consultation: number,
    public deplacement: number,
    public loyer: number,
    public salaire: number,
    public JIRAMA: number,
    public extrat: number
  ) {}

  setLoyer(amount: number) {
    this.loyer = amount;
  }

  setSalaire(amount: number) {
    this.salaire = amount;
  }

  setJIRAMA(amount: number) {
    this.JIRAMA = amount;
  }
}

export class MonthlyReview {
  constructor(
    public date: string,
    public income: number,
    public expense: number,
    public gain: number
  ) {}
}

export class AnnualReview {
  income = 0;
  expense = 0;
  gain = 0;

  constructor(public monthlyReviews: MonthlyReview[]) {
    this.getIncome();
    this.getExpense();
    this.getGain();
  }

  getIncome() {
    let sum = 0;
    this.monthlyReviews.forEach((x) => (sum += x.income));
    this.income = sum;
  }

  getExpense() {
    let sum = 0;
    this.monthlyReviews.forEach((x) => (sum += x.expense));
    this.expense = sum;
  }

  getGain() {
    let sum = 0;
    this.monthlyReviews.forEach((x) => (sum += x.gain));
    this.gain = sum;
  }
}
