import { RevenuService } from './../../services/revenu.service';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';

export interface Revenu {
  type: string;
  heure: string;
  source: string;
  montant: number;
}

@Component({
  selector: 'app-new-credit',
  templateUrl: './new-credit.component.html',
  styleUrls: ['./new-credit.component.scss'],
})
export class NewCreditComponent implements OnInit {
  revenu: Revenu = {
    type: '',
    heure: '',
    source: '',
    montant: 0,
  };

  constructor(
    private dialog: MatDialog,
    private revenuService: RevenuService
  ) {}

  ngOnInit(): void {
    this.revenu = this.revenuService.newRevenu;
  }

  onSubmit(source: string, montant: number) {
    this.revenu.source = source.trim();
    this.revenu.montant = montant;
    this.revenu.heure = `${new Date()}`;

    this.revenuService.newRevenu = this.revenu;
    this.dialog.closeAll();
  }
}
