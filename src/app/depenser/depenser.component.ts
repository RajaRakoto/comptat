import { DepenseService } from './../services/depense.service';
import { NewDepenseComponent } from './../dialog-box/new-depense/new-depense.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

export interface Depense {
  type: string;
  heure: string;
  motif: string;
  montant: number;
}

const DEPENSE_DATA: Depense[] = [
  {
    heure: '07:02',
    type: 'Alimentaire',
    motif: 'Aliment',
    montant: 30000,
  },
  {
    heure: '10:19',
    type: 'Culte',
    motif: 'Pour le Pasteur',
    montant: 140000,
  },
  {
    heure: '12:22',
    type: 'Action social',
    motif: 'Reboisement',
    montant: 150000,
  },
];

const DEPENSE_TYPE = [
  'Alimentaire',
  'Provision',
  'Culte',
  'Action',
  'Consultation',
  'Déplacement',
  'Extrat',
];

@Component({
  selector: 'app-depenser',
  templateUrl: './depenser.component.html',
  styleUrls: ['./depenser.component.scss'],
})
export class DepenserComponent implements OnInit {
  depenses = DEPENSE_DATA;
  types = DEPENSE_TYPE;

  constructor(
    private dialog: MatDialog,
    private depenseService: DepenseService
  ) {}

  ngOnInit(): void {}

  onNewDepense(type: string) {
    this.depenseService.newDepense.type = type;

    this.dialog.open(NewDepenseComponent, {
      width: '350px',
    });

    this.dialog.afterAllClosed.subscribe(() => {
      const _depense = this.depenseService.newDepense;
      if (_depense.montant) {
        this.depenses.push(_depense);
        this.depenseService.dropNewDepense();
      }
    });
  }

  onDropDepense(index: number) {
    this.depenses.splice(index, 1);
  }
}
