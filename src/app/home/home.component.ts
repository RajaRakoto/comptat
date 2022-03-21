import { MatDialog } from '@angular/material/dialog';
import { CaisseComponent } from './../dialog-box/caisse/caisse.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  onCaisse() {
    this.dialog.open(CaisseComponent, {
      width: '450px',
      panelClass: 'dialog-box',
    });
  }
}
