import { RevenuService } from './../../services/revenu.service';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { RevenuItem } from 'src/app/class/revenu';

@Component({
  selector: 'app-new-credit',
  templateUrl: './new-credit.component.html',
  styleUrls: ['./new-credit.component.scss'],
})
export class NewCreditComponent implements OnInit {
  revenu!: RevenuItem;

  constructor(
    private dialog: MatDialog,
    private revenuService: RevenuService
  ) {}

  ngOnInit(): void {
    if (this.revenuService.newRevenu) {
      this.revenu = this.revenuService.newRevenu;
    }
  }

  onSubmit(source: string, montant: number) {
    this.revenu.source = source.trim();
    this.revenu.montant = montant;
    this.revenu.date = `${new Date()}`;

    this.revenuService.newRevenu = this.revenu;
    this.dialog.closeAll();
  }
}
