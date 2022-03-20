export class Depense {
    constructor(
        public id_depense: number,
        public heure: string,
        public type: string,
        public motif: string,
        public montant: number){
    }
}

export const d1 = new Depense(1,'09:47','Alimentaire','Aliment',50000)
export const d2 = new Depense(2,'10:25','Alimentaire','boisson',25000)
export const d3 = new Depense(3,'14:55','Alimentaire','riz',3000)
export const d4 = new Depense(4,'02:00','Alimentaire','meds',10000)
export const DEPENSE_DATA = [d1,d2,d3,d4];
