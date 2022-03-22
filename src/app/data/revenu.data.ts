import { RevenuItem } from './../class/revenu';

export const REVENUS_DATA = [
  new RevenuItem('09:47', 'massage', 'HJRA', 30000),
  new RevenuItem('15:31', 'formation', 'Formation', 220000),
  new RevenuItem('16:11', 'droit de stage', 'Stage', 21000),
];

export const NEW_CREDITS_DATA: RevenuItem[] = [
  {
    date: '08:41',
    type: 'massage',
    source: 'IIF3MG Analakely',
    montant: 40000,
  },
  { date: '10:09', type: 'formation', source: 'Formation', montant: 220000 },
  {
    date: '12:31',
    type: 'aide à domicile',
    source: 'M4C11 Anosy',
    montant: 52000,
  },
  { date: '13:11', type: 'garde malade', source: 'HJRA', montant: 9000 },
];
