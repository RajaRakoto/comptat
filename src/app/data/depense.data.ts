import { DepenseItem } from './../class/depense';

export const DEPENSE_DATA = [
  new DepenseItem('09:47', 'alimentaire', 'Aliment', 50000),
  new DepenseItem('13:09', 'culte', 'Pour le Pasteur', 100000),
  new DepenseItem('15:31', 'action', 'Reboisement', 200000),
  new DepenseItem('17:11', 'extrat', 'Group électrogène', 3000000),
];

export const NEW_DEPENSES_DATA: DepenseItem[] = [
  {
    date: '19:03',
    type: 'consultation',
    motif: 'M4C11 Anosy',
    montant: 22000,
  },
  { date: '19:11', type: 'déplacement', motif: 'urgance', montant: 9000 },
];
