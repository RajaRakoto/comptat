import { DepenseService } from './../../services/depense.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

export interface Depense {
  type: string;
  heure: string;
  motif: string;
  montant: number;
}

@Component({
  selector: 'app-new-depense',
  templateUrl: './new-depense.component.html',
  styleUrls: ['./new-depense.component.scss'],
})
export class NewDepenseComponent implements OnInit {
  depense: Depense = {
    type: '',
    heure: '',
    motif: '',
    montant: 0,
  };

  constructor(
    private dialog: MatDialog,
    private depenseService: DepenseService
  ) {}

  ngOnInit(): void {
    this.depense = this.depenseService.newDepense;
  }

  onSubmit(motif: string, montant: number) {
    this.depense.motif = motif.trim();
    this.depense.montant = montant;
    this.depense.heure = `${new Date()}`;

    this.depenseService.newDepense = this.depense;
    this.dialog.closeAll();
  }
}
