export class Revenu {
    constructor(
        public id_revenu: number,
        public heure: string,
        public type: string,
        public source: string,
        public montant: number){

    }
}
export const revenu01= new Revenu(1,'09:47','Massage','HJRA',30000);
export const revenu02= new Revenu(2,'15:31', 'Formation','Formation',220000);
export const revenu03= new Revenu(3,'16:11', 'Vente','Client',21000);
export const REVENU_DATA =[revenu01,revenu02,revenu03];
