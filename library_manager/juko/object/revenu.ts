export class Revenu {
    constructor(public date: string,
        public type: string,
        public source: number,
        public montant: number){

    }
}

export class revenuJournalier{
    constructor(public date: string,
        public montant : number) {
        
    }
}