import { NewCreditComponent } from './../dialog-box/new-credit/new-credit.component';
import { MatDialog } from '@angular/material/dialog';
import { RevenuService } from './../services/revenu.service';
import { Component, OnInit } from '@angular/core';

export interface Revenu {
  type: string;
  heure: string;
  source: string;
  montant: number;
}

const REVENU_DATA: Revenu[] = [
  {
    heure: '08:41',
    type: 'Massage',
    source: 'IIF3MG Analakely',
    montant: 40000,
  },
  { heure: '10:09', type: 'Formation', source: 'Formation', montant: 220000 },
  {
    heure: '12:31',
    type: 'Aide à domicile',
    source: 'M4C11 Anosy',
    montant: 52000,
  },
  { heure: '13:11', type: 'Garde malade', source: 'HJRA', montant: 9000 },
];

const REVENU_TYPE = [
  'Pension',
  'Aide à domicile',
  'Formation',
  'Droit de stage',
  'Massage',
  'Garde malade',
  'Opération',
  'Consultation',
  'Extrat',
];

@Component({
  selector: 'app-credit',
  templateUrl: './credit.component.html',
  styleUrls: ['./credit.component.scss'],
})
export class CreditComponent implements OnInit {
  revenus = REVENU_DATA;
  types = REVENU_TYPE;

  constructor(
    private dialog: MatDialog,
    private revenuService: RevenuService
  ) {}

  ngOnInit(): void {}

  onNewRevenu(type: string) {
    this.revenuService.newRevenu.type = type;

    this.dialog.open(NewCreditComponent, {
      width: '350px',
    });

    this.dialog.afterAllClosed.subscribe(() => {
      const _revenu = this.revenuService.newRevenu;
      if (_revenu.montant) {
        this.revenus.push(_revenu);
        this.revenuService.dropNewRevenu();
      }
    });
  }

  onDropRevenu(index: number) {
    this.revenus.splice(index, 1);
  }
}
