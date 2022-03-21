import { DepenseItem } from './../../class/depense';
import { DepenseService } from './../../services/depense.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-new-depense',
  templateUrl: './new-depense.component.html',
  styleUrls: ['./new-depense.component.scss'],
})
export class NewDepenseComponent implements OnInit {
  depense!: DepenseItem;

  constructor(
    private dialog: MatDialog,
    private depenseService: DepenseService
  ) {}

  ngOnInit(): void {
    if (this.depenseService.newDepense) {
      this.depense = this.depenseService.newDepense;
    }
  }

  onSubmit(motif: string, montant: number) {
    this.depense.motif = motif.trim();
    this.depense.montant = montant;
    this.depense.date = `${new Date()}`;

    this.depenseService.newDepense = this.depense;
    this.dialog.closeAll();
  }
}
