export class Revenu {
    constructor(public id_revenu: number,
        public date: string,
        public libelle: string,
        public source: number,
        public montant: number){

    }
}

export class revenuJournalier{
    constructor(public id_revenuJournalier: number,
        public date: string,
        public totalJour : number) {
        
    }
}