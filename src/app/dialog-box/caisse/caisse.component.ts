import { MatSnackBar } from '@angular/material/snack-bar';
import { RevenuService } from './../../services/revenu.service';
import { CaisseService } from './../../services/caisse.service';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { Caisse } from 'src/app/class/caisse';

@Component({
  selector: 'app-caisse',
  templateUrl: './caisse.component.html',
  styleUrls: ['./caisse.component.scss'],
})
export class CaisseComponent implements OnInit {
  caisse!: Caisse;

  constructor(
    private dialog: MatDialog,
    private caisseService: CaisseService,
    private revenuService: RevenuService,
    private toast: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.caisse = this.caisseService.caisse;
    this.caisse.today = this.revenuService.revenuToday.total;
  }

  onSubmit(versement: number) {
    if (versement < 1 || versement > this.caisse.assist) {
      return null;
    }
    this.caisse.verser(versement);
    this.caisseService.caisse = this.caisse;
    this.toast.open(`Versement de "${versement} Ar" réussi !`, 'ok', {
      duration: 5000,
      panelClass: 'toast-success',
    });

    setTimeout(() => {
      this.dialog.closeAll();
    }, 1000);

    return null;
  }
}
