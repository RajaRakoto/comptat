export class Revenu {
    constructor(
        public id_revenu: number,
        public date: string,
        public libelle: string,
        public source: number,
        public montant: number){

    }
}

function totalReven(revenuTotal: Revenu[]){
        let totalRevenu: number;
        totalRevenu = 0;

        for(let i = 0; revenuTotal.length; i++) {
            totalRevenu=totalRevenu + revenuTotal[i].montant
        }
        return totalRevenu;
}

export class Depense {
    constructor(public id_depense: number,
        public date: string,
        public libelle: string,
        public motif: number,
        public montant: number){
    }
}


function totalDepense(depenseTotal: Depense[]){
    let totalDepense: number;
    totalDepense = 0;

    for(let i = 0; depenseTotal.length; i++) {
        totalDepense=totalDepense + depenseTotal[i].montant
    }
    return totalDepense;
}


