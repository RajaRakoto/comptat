export class Depense {
    constructor(
        public id_depense: number,
        public date: string,
        public libelle: string,
        public motif: number,
        public montant: number){
    }
}

export class depenseJournalier{
    constructor(
        public id_depenseJournalier: number,
        public date: string,
        public totalJour : number) {
        
    }
}